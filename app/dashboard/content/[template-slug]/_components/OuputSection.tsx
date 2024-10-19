import { Template } from "@/app/dashboard/_components/TempleteListSection";
import { Button } from "@/components/ui/button";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import React, { useEffect, useRef } from "react";


const OutputSection = ({ aiOutput }: { aiOutput?: string | undefined }) => {
  const editorRef: any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    if (aiOutput) {
      editorInstance.setMarkdown(aiOutput);
    } else {
      editorInstance.setMarkdown("Your Result will appear here..!!");
    }
  }, [aiOutput]);

  return (
    <div className="bg-white rounded-lg shadow-lg h-[74.5vh] overflow-scroll">
      <div className="flex p-4 justify-between items-center">
        <h2 className="font-medium text-xl">Your Result</h2>
        <Button
          onClick={() => {
            if (aiOutput) {
              navigator.clipboard.writeText(aiOutput);
            }
          }}>
          <Copy /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will appear here..!!"
        height="65.2vh"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default OutputSection;
