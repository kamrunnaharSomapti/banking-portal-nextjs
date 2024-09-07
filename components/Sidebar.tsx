"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="logo-image"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          ></Image>
          <h1 className="sidebar-logo">Horizontal</h1>
        </Link>
        {/* mapping over sidebar arrays */}
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              className={cn("sidebarLinks", {
                "bg-bankGradient": isActive,
              })}
              href={item.route}
              key={item.label}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
