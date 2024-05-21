import React, { useState, useEffect } from "react";
import computador from "../assets/img/computador.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthentication } from "@/hooks/useAuthentication.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setError("");
    const user = {
      email,
      password,
    };
  
    const loginSuccess = await login(user);
    if (loginSuccess) {
      navigate('/apphome');
    }
  
  };


  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-screen h-screen">
      <div className="w-full h-full sm:w-1/2  justify-center items-center hidden  sm:flex">
        <div className="absolute z-10 flex justify-center items-center">
          <img src={computador} alt="" className="w-5/6 hidden sm:block" />
        </div>
        <div className="bg-green-500 sm:blur-xl w-full h-full sm:inset-0" />
      </div>
      <div className="w-full sm:w-1/2 h-screen flex flex-col items-center justify-center space-y-5 bg-green-500 sm:bg-white">
        <Link
          to="/"
          className="font-bold text-5xl sm:text-green-400 hover:text-stone-300 cursor-pointer hover:scale-105 transition-transform"
        >
          CASH <span className="text-7xl">SAVER</span>
        </Link>
        <h2 className="font-bold text-4xl">Login</h2>
        <p className="text-base font-medium">
          Informe seus dados para se conectar
        </p>
        <form onSubmit={handleSubmit} className="w-1/2 flex flex-col space-y-5 p-6 border border-black rounded-lg bg-white">
          <label className="flex flex-col">
            <span className="text-sm">E-mail:</span>
            <input
              type="email"
              placeholder="seu melhor e-mail"
              name="email"
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
              name="password"
              className="border border-black p-2 rounded"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="flex flex-col items-center">
          {error && <p className="text-red-600">{error}</p>}
            {!loading && (
              <button className="font-bold text-2xl text-green-400 hover:text-stone-300 cursor-pointer hover:scale-105 transition-transform">
              Conectar
            </button>
            )}
            {loading && (
              <button disabled className="font-bold text-2xl text-stone-300 hover:text-stone-300 cursor-pointer hover:scale-105 transition-transform">
              Aguarde...
            </button>
            )}
            <Link to="/register" className="hover:text-stone-300 hover:scale-105 transition-transform">Cadastre-se</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
