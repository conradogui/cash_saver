import React, { useState } from "react";
import { useInsertDocument } from "@/hooks/useInsertDocument.jsx";
import { useAuthValue } from "@/context/AuthContext.jsx";
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
      // Somar o valor atual do cashValue ao totalCashValue
      const newTotalCashValue = totalCashValue + Number(cashValue);
      

      // Atualizar o totalCashValue
      await updateTotalCashValue(newTotalCashValue);

      // Enviar o documento para o banco de dados
      await insertDocument({
        title,
        cashValue,
        totalCashValue: newTotalCashValue, // isso envia o novo valor atualizado
        description,
        type: 'deposit'
      });

      // Resetar cashValue para vazio após adicionar
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
    <div className="w-full">
      <div className="max-w-3xl mx-auto h-screen flex flex-col justify-center items-center space-y-5 p-4">
        <h2 className="font-bold text-4xl">Cadastre sua receita:</h2>
        <p className="text-base font-medium">Preencha os dados abaixo</p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-5 p-6 border border-black rounded-lg">
          <label className="flex flex-col">
            <span className="text-sm">Título:</span>
            <input
              type="text"
              className="border border-black p-2 rounded"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Valor:</span>
            <input
              type="number"
              className="border border-black p-2 rounded"
              required
              value={cashValue}
              onChange={(e) => setCashValue(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Descrição:</span>
            <input
              type="text"
              className="border border-black p-2 rounded"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="flex flex-col items-center">
            {!response.loading && (
              <button className="font-bold text-2xl text-green-400 hover:text-stone-300 cursor-pointer hover:scale-105 transition-transform border border-black rounded-lg w-1/2">
                Adicionar
              </button>
            )}
            {response.loading && (
              <button disabled className="font-bold text-2xl text-stone-300 hover:text-stone-300 cursor-pointer hover:scale-105 transition-transform border border-black rounded-lg w-1/2">
                Aguarde...
              </button>
            )}
            {response.error && <p>{response.error}</p>}
            {formError && <p>{formError}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CdastrarReceita;