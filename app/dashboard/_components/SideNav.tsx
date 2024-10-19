"use client"
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
  const MenuList = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "History", href: "/dashboard/history", icon: FileClock },
    { name: "Billing", href: "/dashboard/billing", icon: WalletCards },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];
  
  const path = usePathname();
  const router = useRouter();

  const openLandingPage = () => {
    return router.push('/landing');
  };

  return (
    <div className="h-full border shadow-sm bg-white flex-col relative">
      <div className="flex justify-center items-center h-20 mb-3 flex-grow">
        <Image src={"/logo.svg"} alt="logo" width={120} height={100} onClick={openLandingPage} />
      </div>
      <hr className="mx-3 border"/>
      <div className="flex flex-col gap-3 items-center mt-7 ">
        {MenuList.map((item, index) => (
          <div key={index}>
            <a
              href={item.href}
            className={`flex items-center justify-start py-2 px-5 rounded-xl text-lg cursor-pointer w-40 lg:w-52 hover:bg-primary hover:text-primary-foreground ${path === item.href && 'bg-primary text-white'}`}
            >
              <item.icon className="h-6 w-6 mr-2 hover:bg-primary hover:text-primary-foreground" />
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <UsageTrack/>
      </div>
    </div>
  );
};

export default SideNav;
