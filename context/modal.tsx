"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const ModalContext = createContext<
  | {
      isOpen: boolean;
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
      profileId: number;
      setProfileId: React.Dispatch<React.SetStateAction<number>>;
    }
  | undefined
>(undefined);

function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [profileId, setProfileId] = useState(-1);
  return (
    <ModalContext.Provider
      value={{ isOpen, setIsOpen, profileId, setProfileId }}
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
