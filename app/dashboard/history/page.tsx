"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { db } from "@/utils/db";
import { aiOutputTable } from "@/utils/schema";
import { Templetes } from "@/contants";
import Image from "next/image";
import '@toast-ui/editor/dist/toastui-editor.css';


export interface AiOutput {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const History = () => {
  const [historyData, setHistoryData] = useState<AiOutput[]>([]);
  const [copyText, setCopyText] = useState<any>('Copy'); // Track the copied entry ID

  useEffect(() => {
    const fetchHistory = async () => {
      const res: any = await db.select().from(aiOutputTable);
      setHistoryData(res);
    };
    fetchHistory();
  }, []);

  const handleCopy = (aiResponse: string, id: number) => {
    navigator.clipboard.writeText(aiResponse);
    setCopyText('Copied'); 

    setTimeout(() => {
        setCopyText('Copy');
    }, 2000);
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">History</h2>
      <p className="text-gray-500">Search your previously generated AI Content</p>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[25vw]">Template</TableHead>
              <TableHead className="w-[35vw]">AI Response</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Words</TableHead>
              <TableHead className="px-5 w-24">Copy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {historyData.map((entry) => {
              const template = Templetes.find((item) => item.slug === entry?.templateSlug);
              return (
                <TableRow key={entry.id}>
                  <TableCell>
                    <div className="flex justify-start items-center gap-3">

                    {template && (
                        <Image src={template.icon} height={40} width={40} alt="logo" />
                    )}
                    <p className="font-medium text-[19px]">{entry.templateSlug}</p>
                    </div>
                  </TableCell>
                  <TableCell className="line-clamp-3">{entry.aiResponse}</TableCell>
                  <TableCell className=" text-center">{new Date(entry.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-center">
                    {entry.aiResponse.split(" ").length}
                  </TableCell>
                  <TableCell className="w-24">
                    <Button
                      className="text-center relative"
                      onClick={() => handleCopy(entry.aiResponse, entry.id)}
                    >
                        {copyText}
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default History;
