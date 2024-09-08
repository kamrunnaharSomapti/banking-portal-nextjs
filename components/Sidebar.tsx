"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar ">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2 flex">
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
              className={cn("sidebar-link", {
                "bg-bankGradient": isActive,
              })}
              href={item.route}
              key={item.label}
            >
              <div className="relative flex gap-2 items-center ">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={24}
                  height={24}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                ></Image>
                <p
                  className={cn("sidebar-label  ", {
                    "!text-white": isActive,
                  })}
                >
                  {item.label}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>
      footer
    </section>
  );
};

export default Sidebar;
