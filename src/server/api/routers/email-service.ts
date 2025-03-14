import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const EmailServiceRouter = createTRPCRouter({
	emailSupport: publicProcedure
		.input(
			z.object({
				name: z
					.string()
					.min(2, { message: "This field has to be filled." })
					.max(100, {
						message: "This field has to be no more than 100 charcters long.",
					}),
				email: z
					.string()
					.min(1, { message: "This field has to be filled." })
					.email("This is not a valid email."),
				message: z
					.string()
					.min(1, { message: "This field has to be filled" })
					.max(2048),
			}),
		)
		.mutation(async ({ input }) => {
			// const { name, email, message } = input;
			// const data = await resend.emails.send({
			// 	from: "H-Fasader Website <onboarding@resend.dev>",
			// 	to: "hfasader991@gmail.com",
			// 	subject: "Request From H-Fasader Baltic Website",
			// 	react: EmailAluminiumPage({
			// 		name: name,
			// 		email: email,
			// 		message: message,
			// 	}),
			// });
			// if (data.error) {
			// 	console.log(data.error);
			// 	throw TRPCError;
			// }
			// return Response.json(data);
		}),
});
