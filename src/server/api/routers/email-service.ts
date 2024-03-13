import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Resend } from "resend";
import EmailAluminiumPage from "~/app/_components/email/email-aluminium-page";

const resend = new Resend(process.env.RESEND_API_KEY);

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
			const { name, email, message } = input;
			try {
				const data = await resend.emails.send({
					from: "H-Fasader Website <mark@danili.uk>",
					to: ["paula.saden@gmail.com", "daniliukmark@gmail.com"],
					subject: "Request From H-Fasader Baltic Website",
					react: EmailAluminiumPage({
						name: name,
						email: email,
						message: message,
					}),
				});

				return Response.json(data);
			} catch (error) {
				return Response.json({ error });
			}
		}),
});
