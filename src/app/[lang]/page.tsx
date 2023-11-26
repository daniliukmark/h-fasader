interface HomePage {
  params: {
    lang: string;
  };
}
export default function HomePage({ params: { lang } }: HomePage) {
  return (
    <>
      <h1>i18n setup</h1>
    </>
  );
}
