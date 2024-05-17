import { useState, useEffect } from "react";
import { db } from "@/firebase/config.jsx";
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';

const useTotalCashValue = () => {
  const [totalCashValue, setTotalCashValue] = useState(0);

  useEffect(() => {
    const fetchTotalCashValue = async () => {
      const docRef = doc(db, "totals", "totalCashValue");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTotalCashValue(docSnap.data().value);
      } else {
        // Caso não exista, criar o documento com valor inicial 0
        await setDoc(docRef, { value: 0 });
      }
    };

    fetchTotalCashValue();
  }, []);

  const updateTotalCashValue = async (newValue) => {
    try {
      const docRef = doc(db, "totals", "totalCashValue");
      await updateDoc(docRef, { value: newValue });
      setTotalCashValue(newValue);
    } catch (error) {
      console.error("Erro ao atualizar totalCashValue: ", error);
    }
  };

  const resetTotalCashValue = async () => {
    try {
      const docRef = doc(db, "totals", "totalCashValue");
      await updateDoc(docRef, { value: 0 });
      setTotalCashValue(0);
    } catch (error) {
      console.error("Erro ao resetar totalCashValue: ", error);
    }
  };

  return [totalCashValue, updateTotalCashValue, resetTotalCashValue];
};

export default useTotalCashValue;