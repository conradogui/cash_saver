import React, { useState } from "react";
import { useInsertDocument } from "@/hooks/useInsertDocument.jsx";
import {useTotalCashValue} from "@/hooks/useTotalCashValue.jsx";
import { useNavigate } from "react-router-dom";

const CdastrarReceita = () => {
  const [title, setTitle] = useState("")
  const [cashValue, setCashValue] = useState("")
  const [description, setDescription] = useState("")
  const [formError, setFormError] = useState("")

  const {insertDocument, response} = useInsertDocument("amount")
  const {totalCashValue, updateTotalCashValue} = useTotalCashValue();
  const navigate = useNavigate()

  const handleSubmit =  async (e) => {
    e.preventDefault()
    setFormError("")

    try {
      const newTotalCashValue = totalCashValue + Number(cashValue);
      

      await updateTotalCashValue(newTotalCashValue);

      await insertDocument({
        title,
        cashValue,
        totalCashValue: newTotalCashValue, 
        description,
        type: 'deposit'
      });

      setCashValue("");
    } catch (error) {
      setFormError("Erro ao adicionar despesa. Tente novamente.");
      console.error("Erro ao atualizar totalCashValue: ", error);
    }
    setDescription("")
    setTitle("")
    navigate("/apphome")
  }

  return (
    <div className="w-full bg-gray-900">
    <div className="max-w-3xl mx-auto h-screen flex flex-col justify-center items-center space-y-5 p-4">
      <h2 className="font-bold text-4xl text-green-500">Cadastrar Receita:</h2>
      <p className="text-base font-medium text-gray-400">Preencha os dados abaixo</p>
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-5 p-6 border border-gray-600 rounded-lg bg-gray-800 shadow-lg">
        <label className="flex flex-col">
          <span className="text-sm text-gray-300">Título:</span>
          <input
            type="text"
            className="border border-gray-600 p-2 rounded-lg bg-gray-700 text-gray-200 focus:border-green-500 focus:outline-none transition-all"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-gray-300">Valor:</span>
          <input
            type="number"
            className="border border-gray-600 p-2 rounded-lg bg-gray-700 text-gray-200 focus:border-green-500 focus:outline-none transition-all"
            required
            value={cashValue}
            onChange={(e) => setCashValue(e.target.value)}
          />
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-gray-300">Descrição:</span>
          <input
            type="text"
            className="border border-gray-600 p-2 rounded-lg bg-gray-700 text-gray-200 focus:border-green-500 focus:outline-none transition-all"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className="flex flex-col items-center">
          {!response.loading && (
            <button className="font-bold text-2xl text-gray-200 bg-green-500 hover:bg-green-600 cursor-pointer hover:scale-105 transition-transform border border-green-700 rounded-lg w-1/2 p-2 shadow-lg">
              Registrar
            </button>
          )}
          {response.loading && (
            <button disabled className="font-bold text-2xl text-gray-200 bg-gray-600 cursor-pointer border border-gray-700 rounded-lg w-1/2 p-2">
              Aguarde...
            </button>
          )}
          {response.error && <p className="text-red-500">{response.error}</p>}
          {formError && <p className="text-red-500">{formError}</p>}
        </div>
      </form>
    </div>
  </div>
  );
};

export default CdastrarReceita;