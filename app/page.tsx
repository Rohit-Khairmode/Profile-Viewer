"use client";
import ProductList from "@/components/Page/ProductList";
import { useAuth } from "@/context/auth";
import { useState } from "react";

export default function Home() {
  const { setIsAdmin, isLogin, setIsLogin } = useAuth();
  return !isLogin ? (
    <div className="bg-gradient-to-br duration-500 from-violet-500 to-fuchsia-500 min-h-[100vh]">
      <div className="flex transition duration-1000 flex-col justify-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-4 h-full">
        <Button
          onClick={() => {
            setIsLogin(true);
          }}
        >
          User
        </Button>
        <Button
          onClick={() => {
            setIsLogin(true);
            setIsAdmin(true);
          }}
        >
          Admin
        </Button>
      </div>
    </div>
  ) : (
    <main className="max-w-[1200px] mx-auto mb-2 px-2 ">
      <ProductList />
    </main>
  );
}

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="text-white px-10 py-6 font-bold text-2xl rounded-lg hover:-translate-y-1 hover:bg-shade1 hover:scale-110 duration-300 bg-black "
    >
      {children}
    </button>
  );
}
