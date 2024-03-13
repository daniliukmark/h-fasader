import { windowRouter } from "~/server/api/routers/window";
import { createTRPCRouter } from "~/server/api/trpc";
import { EmailServiceRouter } from "./routers/email-service";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	window: windowRouter,
	email: EmailServiceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
