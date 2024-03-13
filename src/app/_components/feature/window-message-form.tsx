"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { useState } from "react";
import { api } from "~/trpc/react";

const formSchema = z.object({
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
	const emailSend = api.email.emailSupport.useMutation();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitted(true);
		emailSend.mutate({
			name: values.name,
			message: values.message,
			email: values.email,
		});
		form.reset();
		setIsSubmitted(false);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter Name"
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
							<FormLabel>Your Email</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter Email"
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
							<FormLabel>Your Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Enter Message"
									className="max-h-40 "
									{...field}
									disabled={isSubmitted}
								/>
							</FormControl>
							<FormMessage />
							<p className="text-sm text-muted-foreground">
								Your message will be sent to our support team.
							</p>
						</FormItem>
					)}
				/>

				<Button className="rounded-full" size={"lg"} type="submit">
					Submit
				</Button>
			</form>
		</Form>
	);
}
