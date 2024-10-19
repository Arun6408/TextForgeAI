import { Templetes } from "@/contants";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

export interface FormField {
  label: string;
  feild: "input" | "textarea" | "select";
  name: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

export interface Template {
  name: string;
  description: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form: FormField[];
}

const TempleteListSection = ({
  userSearchInput,
}: {
  userSearchInput: string;
}) => {
  const [filteredTemplates, setFilteredTemplates] =
    useState<Template[]>(Templetes);
  useEffect(() => {
    if(userSearchInput){
        setFilteredTemplates(
            Templetes.filter((item) =>
            item.name.toLowerCase().includes(userSearchInput.toLowerCase())
          )
        );
    }
    else{
        setFilteredTemplates(Templetes);
    }
  }, [userSearchInput]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {filteredTemplates.map((item: Template, index: number) => (
        <div key={index} className="h-48">
          <TemplateCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default TempleteListSection;
