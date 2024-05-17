import { db } from "../firebase/config.jsx"; //preciso importar isso, pois a nova versão do firebase pede

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //cleanUp
  //nao deixar resquiciosde funçoes e cancelar elas para ações futuras do hook
  const [cancelled, setCancelled] = useState(false);

  //consigo usar funções de autenticação a partir disso (que vem do firebase)
  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }


  //register
  const createUser = async (data) => {
    //aqui entra a função de cleanUp
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      //daqui irá se originar um usuário
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, {
        displayName: data.displayName,
      });
      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("auth/weak-password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
      } else if (error.message.includes("auth/email-already-in-use")) {
        systemErrorMessage = "E-mail já cadastrado";
      } else {
        systemErrorMessage = "Ocorreu um ero, por favor tente mais tarde";
        setError(systemErrorMessage);
      }
      
    }
    setLoading(false);
  };

  const logout = () => {
    checkIfIsCancelled()
    signOut(auth)

  }

 //login do usuario
const login = async (data) => {
  checkIfIsCancelled();
  setLoading(true);
  setError(false);

  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    setLoading(false);
    return true; // Retorna true para indicar sucesso no login
  } catch (error) {
    let systemErrorMessage;

    if (error.message.includes("auth/invalid-login-credentials")) {
      systemErrorMessage = "Usuário não encontrado.";
    } else if (error.message.includes("auth/wrong-password")) {
      systemErrorMessage = "Senha incorreta.";
    } else if (error.message.includes("auth/too-many-requests")) {
      systemErrorMessage = "Parece que você está tentando logar muitas vezes, tente mais tarde"
    } else {
      systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde!"
    }
    setError(systemErrorMessage);
    setLoading(false);
    return false; // Retorna false para indicar falha no login
  }
};

  //a função desse useEffect é colocar o cancelled como true assim que sairmos dessa página (ele executa apenas uma vez, por isso usamos o useEffect)
  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    login,
    logout
  };
};
