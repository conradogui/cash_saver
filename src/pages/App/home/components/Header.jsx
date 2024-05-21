import React from "react";
import { ArrowLeftRight } from "lucide-react";
import { Receipt } from "lucide-react";

import NavbarApp from "../../components/NavbarApp.jsx";
import { HandCoins } from "lucide-react";

import logopig from "../../../../assets/img/logopig.png";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <Sheet>
      <div className="border-r border-[#454545] flex flex-col gap-y-36 items-center h-screen bg-gray-900 fixed left-0 top-0">
        <div className="">
          <SheetTrigger>
            <img
              src={logopig}
              alt=""
              className="bg-gray-400 rounded-full p-2"
            />
          </SheetTrigger>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-20 max-w-14 ml-3">
          <SheetTrigger className="w-full">
            <div className="bg-[#1E392E] hover:scale-125 transition-transform flex justify-center p-2 rounded-lg">
              <HandCoins />
            </div>
          </SheetTrigger>
          <SheetTrigger className="w-full">
            <div className="bg-[#1E392E] hover:scale-125 transition-transform flex justify-center p-2 rounded-lg">
              <Receipt />
            </div>
          </SheetTrigger>
          <SheetTrigger className="w-full">
            <div className="bg-[#1E392E] hover:scale-125 transition-transform flex justify-center p-2 rounded-lg">
              <ArrowLeftRight />
            </div>
          </SheetTrigger>
        </div>
      </div>
      <SheetContent
        side="left"
        className="w-[400px] sm:w-[540px] bg-[#2C2C2C] text-white"
      >
        <SheetHeader className="justify-center items-center gap-y-52">
          <SheetTitle>
            <div className="flex gap-9">
              <img
                src={logopig}
                alt=""
                className="bg-gray-400 rounded-full p-2"
              />
              <p className="flex flex-col font-bold text-2xl sm:text-green-400 hover:text-stone-300 cursor-default hover:scale-105 transition-transform">
                CASH <span className="text-5xl">SAVER</span>
              </p>
            </div>
          </SheetTitle>
          <SheetTitle>
            <NavbarApp />
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Header;
