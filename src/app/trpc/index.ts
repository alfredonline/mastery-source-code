import { privateProcedure, publicProcedure, router } from "./trpc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
// import { connect } from "./db";
import { z } from "zod";

export const appRouter = router({
  submitNewImmersionPlan: privateProcedure
    .input(
      z.object({
        _name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // add logic here for submitting a new immersion plan

      return {
        success: true,
        status: 200,
        data: "Holiday request updated successfully.",
      };
    }),
});

export type AppRouter = typeof appRouter;
