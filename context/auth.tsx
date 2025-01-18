"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const AuthContext = createContext<
  | {
      isAdmin: boolean;
      setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
      isLogin: boolean;
      setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin, isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext is used outside of AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
