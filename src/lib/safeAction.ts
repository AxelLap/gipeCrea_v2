import { auth } from "@/auth";
import { createSafeActionClient } from "next-safe-action/.";

export class ServerError extends Error {}

export const actionClient = createSafeActionClient();

export const authAction = actionClient.use(async ({ next }) => {
  const session = await auth();

  const user = session?.user;

  if (!user) {
    throw new ServerError("You must be logged in to perform this action");
  }

  return next({
    ctx: {
      userId: user?.id,
      user,
    },
  });
});
