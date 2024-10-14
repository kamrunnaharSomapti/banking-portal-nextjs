"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { useState } from "react";
import CustomInput from "./CustomInput";
import { authformSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof authformSchema>>({
    // resolver: zodResolver(authformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authformSchema>) {
    console.log("clcik");
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <section className=" auth-form">
      <header className="flex flex-col  gap-5 md:gap-8 ">
        <Link href="/" className="cursor-pointer items-center gap-1 flex ">
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
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900 capitalize">
            {user ? "link account" : type === "sign-in" ? "sign-in" : "sign-up"}
          </h1>
          <p className="text-16 text-gray-600 font-semibold">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {!user ? (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <CustomInput
                control={form.control}
                name="email"
                label="email"
                placeholder="enter your email"
              ></CustomInput>
              <CustomInput
                control={form.control}
                name="password"
                label="password"
                placeholder="enter your password"
              ></CustomInput>

              <div className="flex flex-col">
                <Button type="submit" disabled={isloading} className="form-btn">
                  {isloading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      &nbsp;Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex mx-auto">
            <p>
              {type === "sign-in"
                ? "Don't have an account?"
                : "already have an acount?"}
            </p>
            <Link
              href={type === "sign-in" ? "sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      ) : (
        <div className="flex flex-col gap-4">
          {
            // plaidlin
          }
        </div>
      )}
    </section>
  );
};

export default AuthForm;
