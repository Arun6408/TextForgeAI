"use client";
import { Button } from "@/components/ui/button";
import { Check, Loader2Icon } from "lucide-react";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { db } from "@/utils/db";
import { userSubscriptionTable } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { UserSubscriptionContext } from "@/contexts";

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();
  // @ts-ignore
  const { userSubscription } = useContext<boolean>(UserSubscriptionContext);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const createSubscription = () => {
    setLoading(true);
    axios
      .post("/api/a", {})
      .then((response) => {
        onPayment(response.data.id);
      })
      .catch((err) => {
        console.log("Error creating subscription:", err);
        setLoading(false);
        window.location.href = "/payment-error";
      });
  };

  const onPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "Arun AI Monthly Plan",
      description: "Monthly Plan",
      handler: async (res: any) => {
        saveSubscription(res.razorpay_payment_id);
        setLoading(false);
      },
    };
    //@ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const saveSubscription = async (paymentId: string) => {
    const joinDate = new Date();

    const result = await db
      .insert(userSubscriptionTable)
      .values({
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        active: true,
        paymentId: paymentId,
        joinDate: joinDate.toISOString(),
      });
      if(result){
        window.location.reload();
      }
  };
  return (
    <div className="flex flex-col py-4 lg:h-[calc(100vh-5rem)] justify-center items-center w-full">
      <div className="text-5xl font-bold w-full text-center font-serif">
        Upgrade With Monthly Plan
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-8 w-full items-center mt-6 justify-center">
        {/* Free Plan */}
        <div className="h-96 flex flex-col justify-center w-72 rounded-xl shadow-lg hover:scale-105 transition-all items-center p-6 gap-4 bg-white">
          <div>
            <h2>Free</h2>
          </div>
          <div className="flex items-baseline">
            <h2 className="font-bold text-5xl">$0.00</h2>
            <p>/month</p>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="mr-2" />
                10,000 Words/Month
              </li>
              <li className="flex items-center">
                <Check className="mr-2" />
                50+ Content Templates
              </li>
              <li className="flex items-center">
                <Check className="mr-2" />
                Unlimited Download & Copy
              </li>
              <li className="flex items-center">
                <Check className="mr-2" />1 Month of History
              </li>
            </ul>
          </div>
          <Button variant="outline" className="px-5 py-4 hover:scale-105">
            {userSubscription ? 'You have Premium':'Currently Active'}
          </Button>
        </div>

        {/* Premium Plan */}
        <div className="h-96 flex flex-col justify-center w-72 rounded-xl shadow-lg hover:scale-105 transition-all items-center p-6 gap-4 bg-white">
          <div>
            <h2 className="font-semibold text-xl text-primary">Premium</h2>
          </div>
          <div className="flex items-baseline">
            <h2 className="font-bold text-5xl">$9.99</h2>
            <p>/month</p>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="mr-2" />
                1,000,000 Words/Month
              </li>
              <li className="flex items-center">
                <Check className="mr-2" />
                50+ Content Templates
              </li>
              <li className="flex items-center">
                <Check className="mr-2" />
                Unlimited Download & Copy
              </li>
              <li className="flex items-center">
                <Check className="mr-2" />1 Year of History
              </li>
            </ul>
          </div>
          <Button
            onClick={() => {
              createSubscription();
            }}
            className={`px-5 py-4 transition-all  ${loading ? ' bg-purple-300 hover:bg-purple-300' : ' hover:scale-105 hover:bg-transparent hover:border hover:border-gray-100 hover:text-primary hover:font-medium'}`}
          >
            {loading ? (
              <>
                <Loader2Icon className="animate-spin mx-2" /> Loading
              </>
            ) : (
              userSubscription ? 'Currently Active' :'Get Premium'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
