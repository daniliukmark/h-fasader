import { windowRouter } from "~/server/api/routers/window";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	window: windowRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
