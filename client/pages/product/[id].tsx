import { GetServerSideProps } from "next";
import ProductDetails from "../../components/ProductDetails";
import ProductSpecs from "../../components/ProductSpecs";
import { Product } from "../../types";

const ProductPage = ({ product }: { product: Product }) => {
  if (!product) return <p>Product not found</p>;

  return (
    <>
      <ProductDetails product={product} />
      <ProductSpecs product={product} />
    </>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  try {
    const res = await fetch("http://localhost:3001/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query GetProduct($productId: ID!) {
            Product(id: $productId) {
              id
              name
              price
              description
              quantity
              img_url
              brand
              weight
              colour
              length
              height
              width
              model_code
            }
          }
        `,
        variables: {
          productId: Number(id),
        },
      }),
    });

    const data = await res.json();

    if (!data.data?.Product) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product: data.data.Product,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: {
        product: null,
      },
    };
  }
};
