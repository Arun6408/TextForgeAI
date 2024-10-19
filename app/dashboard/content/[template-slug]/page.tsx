"use client"
import '@toast-ui/editor/dist/toastui-editor.css';
import React, { useContext, useState } from 'react';
import FormSection from './_components/FormSection';
import OutputSection from './_components/OuputSection';
import { Template } from '../../_components/TempleteListSection';
import { Templetes } from '@/contants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { chatSession } from '@/utils/geminiAPI';
import { db } from '@/utils/db';
import { aiOutputTable } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { TotalUsageContext, UpdateCreditContext } from '@/contexts';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface PROPS {
  params: {
    'template-slug': string;
  };
}

const Page = (props: PROPS) => {
  const selectedTemplate: Template | undefined = Templetes.find(
    (item) => item.slug === props.params['template-slug']
  );
  const [loading,setLoading] = useState<boolean>(false);
  const [aiOutput,setAiOutput] = useState<string>();
  const {user} = useUser();
  const {totalUsage} = useContext(TotalUsageContext);
  const router = useRouter();
  const {updateCreditContext , setUpdateCreditContext} = useContext(UpdateCreditContext) 

  const GenerateAIContent = async (formData:any)=>{
    if(totalUsage>=100){
        toast.info('Credit Limit Reached! Get an Upgrade',{
            autoClose:3000,
            draggable:true,
            pauseOnHover: true,
            position: 'top-right',
            theme:'colored'
        })
        router.push('/dashboard/billing');
        return;
    }
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;

    const FinalPrompt = JSON.stringify(formData) + ', ' + selectedPrompt +' and also give a good looking response with emojis if needed';

    const result = await chatSession.sendMessage(FinalPrompt);
    setAiOutput(result.response.text());
    await saveInDb(formData,result.response.text(),selectedTemplate?.slug);
    setLoading(false);
    setUpdateCreditContext(Date.now());
  }

  const saveInDb = async (formData: any, aiOutput: string | undefined, slug: any) => {
    const res = await db.insert(aiOutputTable).values({
      formData: JSON.stringify(formData),  
      aiResponse: aiOutput,
      templateSlug: slug,
      createdBy: user?.primaryEmailAddress?.emailAddress || '',  
      createdAt: new Date().toISOString(), 
    });
  };
  


  // If selectedTemplate is undefined, return a fallback UI
  if (!selectedTemplate) {
    return <div className="mt-20 p-5">Template not found <a className='underline text-blue-400' href="/dashboard">Go to your Dashboard</a></div>;
  }

  return (
    <div>
        <Link href={'/dashboard'}>
            <Button className='mx-5 mt-5'><ArrowLeft/> Back</Button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
      {/* Form Section */}
      <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>GenerateAIContent(v)} loading={loading} />

      {/* Output Section */}
      <OutputSection aiOutput={aiOutput} />
    </div>
    </div>
  );
};

export default Page;
