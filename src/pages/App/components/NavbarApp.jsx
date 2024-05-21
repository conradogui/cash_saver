import React from "react";
import { NavLink } from "react-router-dom";

import { Receipt } from "lucide-react";
import { HandCoins } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";

const NavbarApp = () => {
  return (
    <nav className="flex flex-col justify-center items-center gap-y-14 ">
      <NavLink to="/apphome/registerexpense" className="flex justify-between text-white w-80 pl-5 pr-5 p-2 bg-[#1E392E] hover:scale-105 transition-transform cursor-pointer rounded-3xl">
        <p>Registrar Despesa</p>
        <HandCoins />
      </NavLink>
      <NavLink to="/apphome/registerrecipe" className="flex justify-between text-white pl-5 pr-5 p-2 w-80 bg-[#1E392E] hover:scale-105 transition-transform cursor-pointer rounded-3xl">
        <p >Registrar receita</p>
        <Receipt />
      </NavLink>
      <NavLink to="/apphome/movimentacoes" className="flex justify-between text-white pl-5 pr-5 p-2 w-80 bg-[#1E392E] hover:scale-105 transition-transform cursor-pointer rounded-3xl">
        <p>Movimentações</p>
        <ArrowLeftRight />
      </NavLink>
    </nav>
  );
};

export default NavbarApp;
