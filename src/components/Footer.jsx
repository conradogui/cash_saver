import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 flex items-center flex-col w-full mt-5 pt-5 font-sans space-y-6 pb-20">
      <h3 className="text-green-400 text-2xl font-medium">FAQs</h3>
      <div className="abr w-1/2 flex justify-between border-b border-gray-400 font-semibold">
        <p>O que é a Cash Save e como ela funciona?</p>
        <button className="flex justify-center items-center border-none cursor-pointer bg-transparent">
          +
        </button>
      </div>
      <div className="abr w-1/2 flex justify-between border-b border-gray-400 font-semibold">
        <p>Como funciona a gestão da Cash Save?</p>
        <button className="flex justify-center items-center border-none cursor-pointer bg-transparent">
          +
        </button>
      </div>
      <div className="abr w-1/2 flex justify-between border-b border-gray-400 font-semibold">
        <p>Posso usar a Cash Save de qualquer local?</p>
        <button className="flex justify-center items-center border-none cursor-pointer bg-transparent">
          +
        </button>
      </div>
      <div className="abr w-1/2 flex justify-between border-b border-gray-400 font-semibold">
        <p>Trabalhe conosco</p>
        <button className="flex justify-center items-center border-none cursor-pointer bg-transparent">
          +
        </button>
      </div>
    </footer>
  );
};

export default Footer;
