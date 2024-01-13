interface Page {
  params: {
    lang: string;
    productId: string;
  };
}
export default function Page({ params: { lang, productId } }: Page) {
  return <h1>{productId}</h1>;
}
