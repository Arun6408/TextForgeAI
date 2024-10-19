import { Template } from "@/app/dashboard/_components/TempleteListSection";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2Icon } from "lucide-react";

const FormSection = ({
  selectedTemplate: item,
  userFormInput,
  loading,
}: {
  selectedTemplate?: Template;
  userFormInput: any;
  loading: boolean;
}) => {
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="py-5 shadow-md flex flex-col justify-start px-6 gap-3 bg-white h-fit rounded-lg">
      <Image src={item?.icon || ""} alt="icon" width={60} height={60} />
      <p className="text-2xl mb-2 text-primary font-bold">{item?.name}</p>
      <p className="text-gray-500">{item?.description}</p>
      <form className="mt-6" onSubmit={handleSubmit}>
        {item?.form.map((formFeild, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-semibold text-xl">{formFeild.label}</label>
            {formFeild.feild === "input" ? (
              <Input
                name={formFeild.name}
                required={formFeild?.required}
                onChange={handleInputChange}
              />
            ) : formFeild.feild === "textarea" ? (
              <Textarea
                rows={5}
                onChange={handleInputChange}
                name={formFeild.name}
              />
            ) : formFeild.feild === "select" && formFeild.options ? (
              <Select
                onValueChange={(value) =>
                  handleSelectChange(formFeild.name, value)
                }
              >
                <SelectTrigger className="w-[15rem]" name={formFeild.name}>
                  <SelectValue placeholder={formFeild.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {formFeild.options.map((option, index) => (
                    <SelectItem key={index} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : null}
          </div>
        ))}
        <button
          type="submit"
          className={
            "w-full text-white flex justify-center gap-2 hover:bg-primary-dark font-bold py-2 px-4 rounded-md " +
            (loading ? "bg-[#a994fde6]" : "bg-primary")
          }
        >
          {loading && <Loader2Icon className="animate-spin" />}
          Generate Content
        </button>
      </form>
    </div>
  );
};

export default FormSection;
