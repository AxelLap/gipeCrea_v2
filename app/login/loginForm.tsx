"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      toast.error("Invalid credentials");
      return;
    }

    toast.success("Successfully logged in");

    router.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[40%] flex flex-col gap-2 p-5 m-4 border border-foreground rounded-md"
    >
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input name="email" type="email" required />
      </Field>

      <Field>
        <FieldLabel>Password</FieldLabel>
        <Input name="password" type="password" required />
      </Field>

      <Field className="mt-2">
        <Button
          className="rounded-md bg-foreground text-black font-bold"
          type="submit"
        >
          Login
        </Button>
      </Field>
    </form>
  );
};
