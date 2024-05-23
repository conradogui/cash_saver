import { useState, useEffect } from "react";
import { db } from "@/firebase/config.jsx";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

export const useTotalCashValue = () => {
  const [totalCashValue, setTotalCashValue] = useState(0);

  useEffect(() => {
    const fetchTotalCashValue = async () => {
      const docRef = doc(db, "totals", "totalCashValue");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTotalCashValue(docSnap.data().value);
      } else {
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

  return { totalCashValue, updateTotalCashValue };
};
