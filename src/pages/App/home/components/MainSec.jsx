//ui
import { Receipt } from "lucide-react";
import { HandCoins } from "lucide-react";
import { AlignJustify } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

//hooks
import { useFetchDocuments } from "@/hooks/useFetchDocuments.jsx";
import { useTotalCashValue } from "@/hooks/useTotalCashValue.jsx";

//routes
import { Link } from "react-router-dom";
import GraficsCash from "./GraficsCash.jsx";
import Api from "../../service/Api.jsx";

const MainSec = () => {
  const { documents: amount, loading } = useFetchDocuments("amount");
  const { totalCashValue: total } = useTotalCashValue("totals");


  return (
    <div className="flex flex-col w-10/12 sm:w-9/12 md:w-8/12 sm:ml-40 ml-10">
  {loading && <p>Carregando...</p>}
  <div className="h-auto mt-16 sm:flex gap-10 w-full items-center justify-center">
    <div className="w-full sm:w-1/3 bg-gradient-to-r from-[#243e36] to-[#1d322b] rounded-lg shadow-lg border border-gray-700 p-4 text-center mb-4 sm:mb-0">
      <p className="text-xs text-gray-400">Balanço Total</p>
      <div className="flex items-center justify-center">
        <h3 className="text-3xl font-light text-gray-300 mr-2">R$</h3>
        <h3 className="text-5xl font-light text-gray-300">{total}</h3>
      </div>
    </div>
    <div className="w-full sm:w-1/3 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 text-center mb-4 sm:mb-0">
      <p className="text-xs text-gray-400">Gastos Totais</p>
      <div className="flex items-center justify-center">
        <p className="text-3xl font-light text-gray-300 mr-2">R$</p>
        {amount && amount.length > 0 && (
          <p className="text-5xl font-light text-gray-300">
            {amount.reduce(
              (acc, item) =>
                item.type === "withdrawal" ? acc + Number(item.cashValue) : acc,
              0
            )}
          </p>
        )}
      </div>
    </div>
    <div className="flex justify-center items-center gap-5 flex-col sm:flex-row">
      <Link
        to="/apphome/registerrecipe"
        className="bg-gradient-to-r p-3 from-[#1d322b] to-[#243e36] rounded-lg hover:scale-110 transition-transform text-white"
      >
        Registrar Receita
      </Link>
      <Link
        to="/apphome/registerexpense"
        className="bg-gradient-to-r p-3 from-[#242424] to-[#363636] rounded-lg hover:scale-110 transition-transform text-white"
      >
        Registrar Gasto
      </Link>
    </div>
  </div>
  <div className="flex flex-col md:flex-row mt-10 justify-between h-auto items-center">
    <div className="w-full md:w-1/2 h-full bg-gray-800 rounded-lg p-4 md:p-10 flex flex-col gap-y-6 mb-4 md:mb-0">
      <Dialog>
        <div className="flex justify-between">
          <h2 className="text-white">Movimentações</h2>
          <DialogTrigger className="border border-white max-w-20 rounded-md text-white">
            Visualizar
          </DialogTrigger>
        </div>
        <DialogContent className="h-5/6">
          <DialogHeader>
            <DialogTitle>Todas as movimentações</DialogTitle>
            <DialogDescription>
              <ScrollArea className="h-full w-full rounded-md border p-4">
                {amount && amount.length > 0 && (
                  <>
                    {amount.map((item, index) => (
                      <div key={index}>
                        {item.type === "deposit" ? (
                          <div className="h-10 flex items-center gap-5 border-b border-gray-600 pb-1">
                            <Receipt className="h-full bg-green-600 w-10 rounded-full p-1" />
                            <p className="text-4xl font-light ">
                              + R$: {item.cashValue}
                            </p>
                          </div>
                        ) : (
                          <div className="h-10 flex items-center gap-5 border-b border-gray-600 pb-1">
                            <HandCoins className="h-full bg-red-600 w-10 rounded-full p-1" />
                            <p className="text-4xl font-light ">
                              - R$: {item.cashValue}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </ScrollArea>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {amount && amount.length > 0 && (
        <>
          {amount.map((item, index) => (
            <div key={index}>
              {item.type === "deposit" ? (
                <div className="h-10 flex items-center gap-5 border-b border-gray-600 pb-1">
                  <Receipt className="h-full bg-green-600 w-10 rounded-full p-1" />
                  <div className="flex justify-between w-full">
                    <p className="text-4xl font-light">+ R$: {item.cashValue}</p>
                    <Dialog>
                      <DialogTrigger>
                        <AlignJustify className="" />
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-2xl ">
                            {item.title} +{" "}
                            <span className="text-3xl ">
                              R$: {item.cashValue}
                            </span>
                          </DialogTitle>
                          <DialogDescription className="text-xl font-bold ">
                            {item.description}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ) : (
                <div className="h-10 flex items-center gap-5 border-b border-gray-600 pb-1">
                  <HandCoins className="h-full bg-red-600 w-10 rounded-full p-1" />
                  <div className="flex justify-between w-full">
                    <p className="text-4xl font-light">- R$: {item.cashValue}</p>
                    <Dialog>
                      <DialogTrigger>
                        <AlignJustify />
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-2xl">
                            {item.title} -{" "}
                            <span className="text-3xl">
                              R$: {item.cashValue}
                            </span>
                          </DialogTitle>
                          <DialogDescription className="text-xl font-bold ">
                            {item.description}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
    <div className="w-full md:w-1/2 pl-0 md:pl-10 flex flex-col gap-y-10">
      <GraficsCash />
    </div>
  </div>
  <div className="border bg-gray-900 mt-10 h-screen w-full mb-20 rounded-lg hidden sm:block">
    <Api />
  </div>
</div>
  );
};

export default MainSec;
