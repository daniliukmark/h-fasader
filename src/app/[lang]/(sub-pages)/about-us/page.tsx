interface Page {
  params: {
    lang: string;
  };
}
export default function Page({ params: { lang } }: Page) {
  return (
    <>
      <h1>about-us {lang}</h1>
    </>
  );
}
