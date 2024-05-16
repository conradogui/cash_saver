import React from 'react'
import { NavLink } from "react-router-dom"

import { Receipt } from "lucide-react";
import { HandCoins } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";

const NavbarApp = () => {
  return (
    <nav className='flex flex-col justify-center items-center gap-y-14 '>
      <div className='flex justify-between w-80 pl-5 pr-5 p-2 bg-slate-400 hover:scale-105 transition-transform cursor-pointer rounded-3xl'>
        <NavLink to="/apphome/registerexpense">Registrar Despesa</NavLink>
        <HandCoins />
      </div>
      <div className='flex justify-between pl-5 pr-5 p-2 w-80 bg-slate-400 hover:scale-105 transition-transform cursor-pointer rounded-3xl'>
        <NavLink to="/apphome/registerrecipe">Registrar receita</NavLink>
        <Receipt />
      </div>
      <div className='flex justify-between pl-5 pr-5 p-2 w-80 bg-slate-400 hover:scale-105 transition-transform cursor-pointer rounded-3xl'>
        <NavLink to="/apphome/movimentacoes">Movimentações</NavLink>
        <ArrowLeftRight />
      </div>
    </nav>
  )
}

export default NavbarApp