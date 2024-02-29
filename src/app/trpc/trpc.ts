import { initTRPC } from "@trpc/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

const t = initTRPC.create();

const isAuth = t.middleware(async (opts: any) => {
  const { getUser } = getKindeServerSession();
  const user = (await getUser()) as KindeUser | null;

  if (!user) {
    throw new Error("Unauthorized");
  }

  return opts.next({
    ctx: {
      userId: user.id,
      user,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
