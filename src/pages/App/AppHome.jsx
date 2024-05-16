import React from "react";

import NavbarApp from "./components/NavbarApp.jsx";

import logopig from "../../assets/img/logopig.png";

import { Receipt } from "lucide-react";
import { HandCoins } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AppHome = () => {
  return (
    <div className="flex gap-20 w-full">
      <Sheet>
        <div className="border border-black max-w-20 flex flex-col gap-y-52">
          <div className="">
            <SheetTrigger>
              <img src={logopig} alt="" />
            </SheetTrigger>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-14">
            <SheetTrigger className="hover:scale-150 transition-transform">
              <HandCoins />
            </SheetTrigger>
            <SheetTrigger className="hover:scale-150 transition-transform">
              <Receipt />
            </SheetTrigger>
            <SheetTrigger className="hover:scale-150 transition-transform">
              <ArrowLeftRight />
            </SheetTrigger>
          </div>
        </div>
        <SheetContent side="left" className="w-[400px] sm:w-[540px]">
          <SheetHeader className="justify-center items-center gap-y-52">
            <SheetTitle>
              <img src={logopig} alt="" />
            </SheetTitle>
            <SheetTitle>
              <NavbarApp />
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="flex flex-col w-9/12">
        <div className=" h-24 mt-16 flex gap-10 ">
          <div className="border border-black w-1/3">Saldo atual</div>
          <div className="border border-black w-1/3">Gastos diarios</div>
          <div className="border border-black w-1/3">Gastos do mes</div>
        </div>
        <div className="flex mt-10 justify-between h-3/6">
          <div className="border border-black w-1/2 h-">Movimentações</div>
          <div className="w-1/2 pl-10">
            <Tabs defaultValue="account" className="">
              <TabsList>
                <TabsTrigger value="account">Mensal</TabsTrigger>
                <TabsTrigger value="password">Anual</TabsTrigger>
              </TabsList>
              <TabsContent
                value="account"
                className="flex transition-all gap-16"
              >
                <div className="border w-10/12 border-black rounded-lg p-5 hover:scale-105 transition-transform bg-white">
                  <h3 className="font-bold pb-2 text-xl">Free</h3>
                  <p>Plataforma web</p>
                  <p>Plataforma Mobile</p>
                  <p>40 lançamentos/mês</p>
                  <p>10 anexos</p>
                  <p>Relatorios</p>
                  <p>Cartao de credito</p>
                </div>
              </TabsContent>
              <TabsContent value="password" className="flex gap-16">
                <div className="border border-black rounded-lg p-5 hover:scale-105 transition-transform bg-white">
                  <h3 className="font-bold pb-2 text-xl">Free</h3>
                  <p>Plataforma web</p>
                  <p>Plataforma Mobile</p>
                  <p>40 lançamentos/mês</p>
                  <p>10 anexos</p>
                  <p>Relatorios</p>
                  <p>Cartao de credito</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="border border-black mt-10 h-80 mb-20">
          Api de ações da bolsa de valores
        </div>
      </div>
    </div>
  );
};

export default AppHome;
