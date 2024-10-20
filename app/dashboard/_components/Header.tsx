import { UserButton } from "@clerk/nextjs";
import { MenuIcon, Search } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import SideNav from "./SideNav";

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  const openSideNav = () => {
    setIsSideNavOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target as Node)) {
      setIsSideNavOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) { 
      setIsSideNavOpen(false);
    }
  };

  useEffect(() => {
    if (isSideNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSideNavOpen]);

  return (
    <div className="border-b-2 p-5 w-full shadow-sm flex justify-between items-center gap-2 h-20 bg-white">
      <div className="md:hidden">
        <MenuIcon onClick={openSideNav} />
      </div>
      <div className="flex gap-2 items-center rounded-md border px-4">
        <label htmlFor="searchbox">
          <Search />
        </label>
        <input
          type="text"
          name="searchbox"
          className="outline-none w-24 sm:w-40 lg:w-96 py-1"
          placeholder="search.."
        />
      </div>
      <a href="/dashboard/billing">
        <div className="flex items-center gap-5">
          <div className="bg-primary text-white p-2 rounded-full hidden md:flex px-5 md:text-base text-xs">
            🔥Join MemberShip
            <span className="font-semibold ml-1">Free for 30 days</span>
          </div>
          <UserButton afterSignOutUrl="/landing" />
        </div>
      </a>
      {isSideNavOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 opacity-100 z-50">
          <div
            ref={sideNavRef}
            className="p-5 w-64 bg-white h-full rounded-xl shadow-lg opacity-100"
          >
            <SideNav />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
