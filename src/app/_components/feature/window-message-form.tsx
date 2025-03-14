"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useTranslation } from "~/app/i18n/client";
import { cn } from "~/utils/utils";

import { Button } from "~/app/_components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "~/app/_components/ui/form";
import { Input } from "~/app/_components/ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: "This field has to be filled." })
		.max(100, {
			message: "This field has to be no more than 100 characters long.",
		}),
	email: z
		.string()
		.min(1, { message: "This field has to be filled." })
		.email("This is not a valid email."),
	message: z
		.string()
		.min(1, { message: "This field has to be filled" })
		.max(2048),
});

interface WindowMessageFormProps {
	lang: string;
	emailReceiver: string;
}

export default function WindowMessageForm({
	lang,
	emailReceiver,
}: WindowMessageFormProps) {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { t } = useTranslation(lang, "components", {});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const subject = `Message from ${values.name}`;
		const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;

		// Encode the components for the mailto URL
		const encodedSubject = encodeURIComponent(subject);
		const encodedBody = encodeURIComponent(body);

		// Create the mailto URL
		const mailtoUrl = `mailto:${emailReceiver}?subject=${encodedSubject}&body=${encodedBody}`;

		// Open the user's email client with the prefilled information
		window.location.href = mailtoUrl;

		setIsSubmitted(true);
		form.reset();
		setTimeout(() => setIsSubmitted(false), 3000);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t("window-message-form.name-field-label")}</FormLabel>
							<FormControl>
								<Input
									placeholder={t("window-message-form.name-field-placeholder")}
									disabled={isSubmitted}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{t("window-message-form.email-field-label")}
							</FormLabel>
							<FormControl>
								<Input
									placeholder={t("window-message-form.email-field-placeholder")}
									disabled={isSubmitted}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{t("window-message-form.message-field-label")}
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder={t(
										"window-message-form.message-field-placeholder",
									)}
									className="max-h-40"
									{...field}
									disabled={isSubmitted}
								/>
							</FormControl>
							<FormMessage />

							<p className="text-muted-foreground text-sm">
								{t("window-message-form.form-additional-info")}
							</p>
							{isSubmitted && (
								<p className="bg-green-200 p-4 py-2 border border-green-300 rounded-full w-fit text-sm">
									{t("window-message-form.form-success")}
								</p>
							)}
						</FormItem>
					)}
				/>
				<Button className={cn("rounded-full")} size={"lg"} type="submit">
					{t("window-message-form.button-submit")}
				</Button>
			</form>
		</Form>
	);
}
