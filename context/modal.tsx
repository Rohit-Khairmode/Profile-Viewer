"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const ModalContext = createContext<
  | {
      isOpen: boolean;
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
      profileId: number;
      setProfileId: React.Dispatch<React.SetStateAction<number>>;
      type: string;
      setType: React.Dispatch<React.SetStateAction<string>>;
    }
  | undefined
>(undefined);

function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [profileId, setProfileId] = useState(-1);
  const [type, setType] = useState("");
  return (
    <ModalContext.Provider
      value={{ isOpen, setIsOpen, profileId, setProfileId, type, setType }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("ModalContext is used outside of ModalProvider");
  return context;
}

export { ModalProvider, useModal };
