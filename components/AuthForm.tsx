"use client";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { useState } from "react";
import CustomInput from "./CustomInput";
import { authformSchema } from "@/lib/utils";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  // 1. Define your form.
  const form = useForm<z.infer<typeof authformSchema>>({
    resolver: zodResolver(authformSchema),
    defaultValues: {
      email: "",
      password: "sss",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authformSchema>) {
    console.log(values);
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
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              <Button type="submit">Submit</Button>
            </form>
          </FormProvider>
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
