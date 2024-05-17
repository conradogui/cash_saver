import React from "react";

import NavbarApp from "./components/NavbarApp.jsx";

import { Link } from "react-router-dom";

import logopig from "../../assets/img/logopig.png";

import { Receipt } from "lucide-react";
import { HandCoins } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { CircleUserRound } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthentication } from "@/hooks/useAuthentication.jsx";
import { useFetchDocuments } from "@/hooks/useFetchDocuments.jsx";

const AppHome = () => {
  const { documents: amount, loading } = useFetchDocuments("amount");

  const { logout } = useAuthentication();
  return (
    <div className="flex w-full bg-[#1E1E1E] text-white">
      <Sheet>
        <div className="border-r border-[#454545] max-w-20 flex flex-col gap-y-52">
          <div className="">
            <SheetTrigger>
              <img
                src={logopig}
                alt=""
                className="bg-[#c6ffe6] rounded-3xl p-2"
              />
            </SheetTrigger>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-14 max-w-14 ml-3">
            <SheetTrigger className="w-full">
              <div className="bg-[#345e37] hover:scale-125 transition-transform flex justify-center p-1 rounded-lg">
                <HandCoins />
              </div>
            </SheetTrigger>
            <SheetTrigger className="w-full">
              <div className="bg-[#345e37] hover:scale-125 transition-transform flex justify-center p-1 rounded-lg">
                <Receipt />
              </div>
            </SheetTrigger>
            <SheetTrigger className="w-full">
              <div className="bg-[#345e37] hover:scale-125 transition-transform flex justify-center p-1 rounded-lg">
                <ArrowLeftRight />
              </div>
            </SheetTrigger>
          </div>
        </div>
        <SheetContent
          side="left"
          className="w-[400px] sm:w-[540px] bg-[#1E1E1E] text-white"
        >
          <SheetHeader className="justify-center items-center gap-y-52">
            <SheetTitle>
              <img
                src={logopig}
                alt=""
                className="bg-[#c6ffe6] rounded-3xl p-2"
              />
            </SheetTitle>
            <SheetTitle>
              <NavbarApp />
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="flex flex-col w-full">
        <div className="h-14 flex justify-between ml-5 mr-20 items-center">
          <div>
            <p>Olá Guilherme!</p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CircleUserRound />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>
                  <button onClick={logout}>Sair</button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex flex-col w-10/12 ml-20">
          <div className=" h-24 mt-16 flex gap-10 ">
            <div className=" w-1/3 bg-gradient-to-r from-[#2e8b57] to-[#61bc84] rounded-lg ">
              <p className="text-sm ml-2">Balanço total</p>
              <div className="flex">
                <h3 className="text-5xl ml-5 font-light">R$:</h3>
                {amount && amount.length > 0 && (
                  <h3 className="text-5xl ml-5 font-light">
                    {amount[0].totalCashValue}
                  </h3>
                )}
              </div>
            </div>
            <div className=" w-1/3 bg-[#454545] rounded-lg">
              <p className="text-sm ml-2">Gastos diários</p>
              <h3 className="text-5xl ml-5 font-light">R$ 243,99</h3>
            </div>
            <div className=" w-1/3 bg-[#454545] rounded-lg">
              <p className="text-sm ml-2">Gastos mensais</p>
              <h3 className="text-5xl ml-5 font-light">R$ 3004,50</h3>
            </div>
          </div>
          <div className="flex mt-10 justify-between h-3/6 items-start">
            <div className=" w-1/2 h-full bg-[#454545] rounded-lg p-10 flex flex-col gap-y-6">
              <h2>Movimentações</h2>
              {amount &&
                amount.map((val, index, array) => (
                  <div key={index}>
                    <p
                      style={{
                        color:
                          index === 0 ||
                          val.totalCashValue > array[index - 1].totalCashValue
                            ? "green"
                            : "red",
                      }}
                    >
                      {val.cashValue}
                    </p>
                  </div>
                ))}

              <div className=" h-10 flex items-center gap-5 border-b border-[#686767] pb-1">
                <Receipt className="h-full bg-[#61bc84] w-10 rounded-full p-1" />
                <p className="text-4xl font-light">+ R$ 1000,00</p>
              </div>
              <div className=" h-10 flex items-center gap-5 border-b border-[#686767] pb-1">
                <HandCoins className="h-full bg-[#ad3a3a] w-10 rounded-full p-1" />
                <p className="text-4xl font-light">+ R$ 1000,00</p>
              </div>
              <div className=" h-10 flex items-center gap-5 border-b border-[#686767] pb-1">
                <Receipt className="h-full bg-[#61bc84] w-10 rounded-full p-1" />
                <p className="text-4xl font-light">+ R$ 1000,00</p>
              </div>
              <div className=" h-10 flex items-center gap-5 border-b border-[#686767] pb-1">
                <HandCoins className="h-full bg-[#ad3a3a] w-10 rounded-full p-1" />
                <p className="text-4xl font-light">+ R$ 1000,00</p>
              </div>
              <div className=" h-10 flex items-center gap-5 border-b border-[#686767] pb-1">
                <Receipt className="h-full bg-[#61bc84] w-10 rounded-full p-1" />
                <p className="text-4xl font-light">+ R$ 1000,00</p>
              </div>
            </div>
            <div className="w-1/2 pl-10 flex flex-col gap-y-10">
              <div className="flex justify-around">
                <Link
                  to="/apphome/registerrecipe"
                  className="bg-gradient-to-r from-[#2e8b57] to-[#61bc84] rounded-lg hover:scale-110 transition-transform"
                >
                  Registrar Receita
                </Link>
                <Link
                  to="/apphome/registerexpense"
                  className="bg-gradient-to-r from-[#721f1f] to-[#ad3a3a] rounded-lg hover:scale-110 transition-transform"
                >
                  Registrar Gasto
                </Link>
              </div>
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">
                    Média de gasto diário
                  </TabsTrigger>
                  <TabsTrigger value="password">
                    Média de gasto mensal
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="account"
                  className="flex transition-all gap-16"
                >
                  <div className="w-10/12 rounded-lg p-5 hover:scale-105 transition-transform bg-[#454545]">
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
                  <div className="w-10/12  rounded-lg p-5 hover:scale-105 transition-transform bg-[#454545]">
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
          <div className="border border-black mt-10 h-80 mb-20 bg-[#454545] rounded-lg">
            Api de ações da bolsa de valores
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHome;
