"use client";
import Sidebar from "@/components/Sidebar";

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
      <Sidebar user={loggedInUser}></Sidebar>
      {children}
    </main>
  );
}
