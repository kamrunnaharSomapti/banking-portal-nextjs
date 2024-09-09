"use client";
import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // user logged in dummy info later it will come from the server
  const loggedInUser = {
    firstName: "example-name",
    lastName: "example-lastName",
  };
  return (
    <main className="flex h-screen w-full font-inter">
      {/* dekstop sidebar */}
      <Sidebar user={loggedInUser}></Sidebar>
      {/* mobile device sidebar */}
      <div className="flex size-full flex-col ">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            alt="logo-image"
            width={30}
            height={30}
            className="size-[24px] max-xl:size-14"
          ></Image>
          <div>
            {/* mobile navbar */}
            <MobileNavbar user={loggedInUser}></MobileNavbar>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
