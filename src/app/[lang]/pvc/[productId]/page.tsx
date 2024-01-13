interface Page {
  lang: string;
  params: {
    productId: string;
  };
}
export default function Page({ lang, params: { productId } }: Page) {
  return <h1>{productId}</h1>;
}
