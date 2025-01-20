"use client";
import { AuthProvider } from "@/context/auth";
import { ModalProvider } from "@/context/modal";
import { ProfileProvider } from "@/context/ProfilesContext";
import { Toaster } from "react-hot-toast";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthProvider>
        <ProfileProvider>
          <ModalProvider>{children}</ModalProvider>
        </ProfileProvider>
      </AuthProvider>
      <Toaster
        position="top-center"
        gutter={12} //gap between window and toaster
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000, //3sec
          },
          error: {
            duration: 5000, //5 sec
          },
          style: {
            fontSize: "20px",
            fontWeight: "bold",
            maxWidth: "500px",
            padding: "14px 22px",
            backgroundColor: "#cf711f",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default Provider;
