"use client";
import { useAuth } from "@/context/auth";
import BrandLogo from "@/public/images/bynrylogo.webp";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function Navigation() {
  const { isLogin, isAdmin, setIsAdmin, setIsLogin } = useAuth();
  if (!isLogin) return null;
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center py-2 px-2 max-w-[1200px] m-auto">
        <Link href={"/"} className=" ">
          <Image src={BrandLogo} alt="logo" height={100} width={100} />
        </Link>
        <div className="flex gap-2 items-center">
          {" "}
          <div
            className={
              "bg-primary text-white rounded-full font-bold  hover:bg-shade1 text-lg px-4 py-2 "
            }
          >
            {isAdmin ? "Admin" : "User"}
          </div>
          <button
            onClick={() => {
              setIsAdmin(false), setIsLogin(false);
            }}
            className={
              "bg-shade1 text-white rounded-full font-bold  hover:bg-shade2 text-lg px-4 py-2 "
            }
          >
            <LogOutIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
