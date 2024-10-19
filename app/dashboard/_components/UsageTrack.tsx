"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { aiOutputTable, userSubscriptionTable } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";
import { AiOutput } from "../history/page";
import { TotalUsageContext, UpdateCreditContext, UserSubscriptionContext } from "@/contexts";


const UsageTrack = () => {
  const { user } = useUser();
  const [totalWords, setTotalWords] = useState<number>(0);
  const { userSubscription,setUserSubscription } = useContext(UserSubscriptionContext);
  const [maxWords, setMaxWords] = useState<number>(10000);
  const {setTotalUsage} = useContext(TotalUsageContext);
  const {updateCreditContext} = useContext(UpdateCreditContext);


  const isUserSubscribed = async () => {
    try {
      const result = await db
        .select()
        .from(userSubscriptionTable) // @ts-ignore
        .where(eq(userSubscriptionTable.email, user?.primaryEmailAddress?.emailAddress));
  
  
      if (result.length > 0) { 
        setUserSubscription(true);
        setMaxWords(1000000);
      }
    } catch (error) {
      console.error("Error fetching subscription:", error);
    }
  };
  

  const getData = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      //@ts-ignore
      const res: AiOutput[] = await db
        .select()
        .from(aiOutputTable)
        .where(eq(aiOutputTable.createdBy, user.primaryEmailAddress.emailAddress));
      getTotalWords(res);
    }
  };


  const getTotalWords = (res: AiOutput[]) => {
    let countWords: number = 0;
    res.forEach((item) => {
      countWords += Number(item.aiResponse?.split(" ").length);
    });
    setTotalWords(countWords);
    setTotalUsage(countWords / maxWords);
  };

  // Fetch data after user is available
  useEffect(() => {
    if (user) {
      isUserSubscribed();
      getData();
    }
  }, [user]);

  useEffect(()=>{
    if(user) { getData();}
  },[updateCreditContext])

  return (
    <div className="m-2">
      <div className="bg-primary p-3 flex flex-col justify-evenly rounded-lg shadow-lg text-white">
        <h2>Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full my-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${(totalWords/maxWords) * 100}%` }}
          ></div>
        </div>
        <h2 className="text-sm">{totalWords}/{maxWords} Credits used</h2>
      </div>
      <div>
        <Button variant={"secondary"} className="text-primary w-full my-3">
          Upgrade
        </Button>
      </div>
    </div>
  );
};

export default UsageTrack;
