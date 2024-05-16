//nesse context irei trabalhar com todas as propriedades de contexto do meu App
//Esse componente vai ser inserido no App.jsx
import { useContext, createContext } from "react";

const AuthContext = createContext()

export function AuthProvider({children, value}) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthValue() {
    return useContext(AuthContext)
}