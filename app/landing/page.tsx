'use client'
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Header from ".././_components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Card, { CardProps } from ".././_components/card";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const openDashboard = () =>{
    return router.push('/dashboard');
  }

  const openSignUp = () => {
    return router.push('/sign-up');
  }

  const words = [
    {
      text: "Boost",
    },
    {
      text: "your",
    },
    {
      text: "writing",
    },
    {
      text: "efficiency",
    },
    {
      text: "with",
    },
    {
      text: "AI-tools.",
      className: "text-blue-500 dark:text-blue-500",
    },
    
  ];

  const cards: CardProps[] = [
    {
      title: "Dashboard",
      description: "Explore a variety of free, ready-to-use templates designed for ease of use and quick setup.",
      link: "/dashboard",
      linkName: "Access Dashboard"
    },
    {
      title: "Billing",
      description: "Review pricing plans and upgrade options to unlock additional features and capabilities.",
      link: "/dashboard/billing",
      linkName: "Manage Billing"
    },
    {
      title: "History",
      description: "Easily access and manage all your previously generated AI content in one place.",
      link: "/dashboard/history",
      linkName: "View History"
    },
    {
      title: "Contact",
      description: "Reach out to our support team for assistance or inquiries regarding the platform.",
      link: "/contact",
      linkName: "Get in Touch"
    }
  ];
  

  return (
    <div className="w-screen min-h-screen">
      <AuroraBackground>
        <div className="w-full h-[100vh] flex flex-col justify-start z-10 overflow-scroll">
          {/* header */}
          <Header />
          <div className="w-full min-h-[70vh] flex flex-col items-center justify-center gap-5 border">
            <TypewriterEffect
              words={words}
              className="typewriter-text"
              cursorClassName="typewriter-cursor"
            />
            <div className="flex gap-5 items-center py-2">
              <Button
                variant={"secondary"}
                className="px-3 py-2 gap-1 h-full hover:scale-105 hover:bg-transparent border border-gray-400 bg-transparent text-md text-gray-600 hover:text-black  transition-all z-10"
                onClick={openDashboard}
              >
                Get Started
                <ArrowRight className="w-4" />
              </Button>
              <button className="flex items-center gap-1 bg-gradient-to-br text-gray-100 font-medium from-blue-500 to-purple-500 border hover:scale-105 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-blue-500 transition-all rounded-lg px-9 py-2 hover:bg- text-lg" onClick={openSignUp}>
                Sign Up
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-20 w-full  md:px-20 py-5">
              {cards.map((card, index) => <Card card={card}/>)}
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}
