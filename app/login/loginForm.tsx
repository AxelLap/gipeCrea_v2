"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const handleSubmit = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  alert(`email : ${email} password : ${password}`);
};

export const LoginForm = () => {
  return (
    <form
      className="w-[40%] flex flex-col gap-2 p-5 m-4 border border-foreground rounded-md"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(new FormData(e.target));
      }}
    >
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input name="email" required />
      </Field>
      <Field>
        <FieldLabel>Password</FieldLabel>
        <Input name="password" required />
      </Field>
      <Field className="mt-2">
        <Button className="rounded-md bg-foreground text-black" type="submit">
          Submit
        </Button>
      </Field>
    </form>
  );
};
