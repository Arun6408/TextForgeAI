"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext, UserSubscriptionContext, UpdateCreditContext } from "@/contexts";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateCreditContext , setUpdateCreditContext] = useState<number>();
  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider
        value={{ userSubscription, setUserSubscription }}
      >
        <UpdateCreditContext.Provider value={{updateCreditContext , setUpdateCreditContext}}>
        <div className="flex w-screen bg-slate-100">
          <div className="md:w-64 hidden md:block h-screen fixed">
            <SideNav />
          </div>
          <div className="md:ml-64 w-full">
            <Header />
            {children}
          </div>
        </div>
        </UpdateCreditContext.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default layout;
