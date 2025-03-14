import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const windowRouter = createTRPCRouter({
	getAll: publicProcedure
		.input(
			z.object({
				limit: z.number(),
				lang: z.string(),
				material: z.enum(["pvc", "aluminium"]),
			}),
		)
		.query(({ ctx, input }) => {
			const { limit, lang, material } = input;
			return ctx.db.window.findMany({
				where: {
					material: material,
				},
				take: limit,
				include: {
					translation: {
						select: { title: true, desc: true, specs: true, accs: true },
						where: { lang: lang },
					},
					mainImage: {
						select: { url: true },
					},
					images: {
						select: { url: true },
					},
				},
			});
		}),

	getById: publicProcedure
		.input(
			z.object({
				id: z.string(),
				lang: z.string(),
				material: z.enum(["pvc", "aluminium"]),
			}),
		)
		.query(({ ctx, input }) => {
			const { id, lang, material } = input;
			return ctx.db.window.findFirst({
				where: {
					id: id,
					material: material,
				},
				include: {
					translation: {
						select: { title: true, desc: true, specs: true, accs: true },
						where: { lang: lang },
					},
					mainImage: {
						select: { url: true },
					},
					images: {
						select: { url: true },
					},
				},
			});
		}),
});
