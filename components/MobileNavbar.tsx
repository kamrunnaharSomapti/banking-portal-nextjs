"use client";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[246px] ">
      <Sheet>
        <SheetTrigger>
          <Image
            className="cursor-pointer"
            src="/icons/hamburger.svg"
            height={34}
            width={34}
            alt="hamburger-menu"
          ></Image>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white border-none">
          <Link
            href="/"
            className="cursor-pointer items-center gap-1 flex px-4"
          >
            <Image
              src="/icons/logo.svg"
              alt="logo-image"
              width={34}
              height={34}
            ></Image>
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizontal
            </h1>
          </Link>
          {/* mapping over sidebar arrays */}
          <div className="mobilenav-sheet">
            <SheetClose>
              <nav className="h-full flex flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item?.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bankGradient": isActive,
                        })}
                        href={item.route}
                        key={item.label}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={24}
                          height={24}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        ></Image>
                        <h1
                          className={cn(
                            "text-16 text-black-2 font-semibold text",
                            {
                              "text-white": isActive,
                            }
                          )}
                        >
                          {item.label}
                        </h1>
                      </Link>
                    </SheetClose>
                  );
                })}
                user
              </nav>
            </SheetClose>
            footer
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
