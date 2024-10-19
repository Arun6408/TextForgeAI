import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="border-b-2 p-5 w-full shadow-sm flex justify-between items-center gap-2 h-20 bg-white">
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
          <div className="bg-primary text-white p-2 rounded-full px-5 md:text-base text-xs">
            🔥Join MemberShip{" "}
            <span className="font-semibold">Free for 30 days</span>
          </div>
          <UserButton afterSignOutUrl="/landing" />
        </div>
      </a>
    </div>
  );
};

export default Header;
