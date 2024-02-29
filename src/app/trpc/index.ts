import { privateProcedure, publicProcedure, router } from "./trpc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";


export const appRouter = router({
  
});

export type AppRouter = typeof appRouter;
