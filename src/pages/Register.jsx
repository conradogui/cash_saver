import { useAuthentication } from "@/hooks/useAuthentication.jsx";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    const user = {
      displayName,
      email,
      password,
    };
    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const registerSucess = await createUser(user);
    if (registerSucess) {
      navigate('/apphome');
    }

    const res = await createUser(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto h-screen flex flex-col justify-center items-center space-y-5 p-4">
        <Link
          to="/"
          className="font-bold text-5xl text-green-400 hover:text-stone-300 cursor-pointer hover:scale-105 transition-transform"
        >
          CASH <span className="text-7xl">SAVER</span>
        </Link>
        <h2 className="font-bold text-4xl">Cadastro</h2>
        <p className="text-base font-medium">Informe seus dados abaixo</p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-5 p-6 border border-black rounded-lg"
        >
          <label className="flex flex-col">
            <span className="text-sm">Nome de usuário:</span>
            <input
              type="text"
              placeholder="Ex: Carlos Alberto"
              className="border border-black p-2 rounded"
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">E-mail:</span>
            <input
              type="email"
              placeholder="seu melhor e-mail"
              className="border border-black p-2 rounded"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Senha:</span>
            <input
              type="password"
              placeholder="senha"
              className="border border-black p-2 rounded"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Confirme sua senha:</span>
            <input
              type="password"
              placeholder="senha"
              className="border border-black p-2 rounded"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          {error && <p className="text-red-600">{error}</p>}
          <div className="flex flex-col items-center">
            {!loading && (
              <button className="font-bold text-2xl text-green-400 hover:text-stone-300 cursor-pointer hover:scale-105 transition-transform border border-black rounded-lg w-1/2">
                Cadastrar
              </button>
            )}
            {loading && (
              <button disabled className="font-bold text-2xl text-stone-300 hover:text-stone-300 cursor-pointer hover:scale-105 transition-transform border border-black rounded-lg w-1/2">
                Aguarde...
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
