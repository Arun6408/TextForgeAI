import React from "react";
import { Template } from "./TempleteListSection";
import Image from "next/image";
import Link from "next/link";

const TemplateCard = (item: Template) => {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
      <div className="p-4 flex flex-col justify-center items-start px-8 gap-3 h-full w-full rounded-xl cursor-pointer shadow-lg hover:scale-105 transition-all shadow-purple-100 bg-white">
        <Image src={item.icon} alt="icon" width={40} height={20} />
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-black text-md line-clamp-3">{item.description}</p>
      </div>
    </Link>
  );
};

export default TemplateCard;
