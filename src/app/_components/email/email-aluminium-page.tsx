interface EmailAluminiumPageProps {
	name: string;
	email: string;
	message: string;
}
export default function EmailAluminiumPage({
	name,
	email,
	message,
}: EmailAluminiumPageProps) {
	const timestamp = Date.now();
	const date = new Date(timestamp);
	const formattedDate = date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});

	return (
		<div>
			<div>Date: {formattedDate}</div>
			<br />
			<div>Name: {name}</div>
			<br />
			<div>Email: {email}</div>
			<br />
			<div>Messaage: {message}</div>
		</div>
	);
}
