import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//context
import { AuthProvider } from "./context/AuthContext.jsx";

import { onAuthStateChanged } from "firebase/auth"; //função mapeia se a autenticação do usuario foi feita com sucesso

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication.jsx";

//pages
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AppHome from "./pages/App/home/AppHome.jsx";
import CadastrarDespesa from "./pages/App/pages/CadastrarDespesa.jsx";
import CadastrarReceita from "./pages/App/pages/CadastrarReceita.jsx";
import Movimentacoes from "./pages/App/pages/Movimentacoes.jsx";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined; //comparo o valor de user e undefined e igualo ao loading do usuario, caso seja undefined, significa que esta carregando, ou seja, so vou mostrar as coisas quando o usuario carregar

  //mapeia o estado da autenticação -> sempre que mudar a autenticação, ele é executado
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/apphome" element={user ? <AppHome /> : <Navigate to="/" />}/>
            <Route path="/register" element={<Register />} />
            <Route path="/apphome/registerexpense" element={<CadastrarDespesa/>} />
            <Route path="/apphome/registerrecipe" element={<CadastrarReceita/>} />
            <Route path="/apphome/movimentacoes" element={<Movimentacoes/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
