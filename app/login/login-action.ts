"use server";

import { signIn } from "../../src/auth";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "unknown error",
    };
  }
}
