"use client";
import { AuthProvider } from "@/context/auth";

function Provider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Provider;
