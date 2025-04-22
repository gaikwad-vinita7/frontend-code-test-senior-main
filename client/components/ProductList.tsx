import { useEffect, useState } from "react";
import Link from "next/link";
import { styled } from "styled-components";
import Image from "next/image";
import { Product } from "../types";

const API_URL = "http://localhost:3001/graphql";

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    margin: 1rem;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--ice);
    span {
      margin-left: 2rem;
    }
  }
`;

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>(null);

  useEffect(() => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          {
            allProducts {
              id
              name
              price
              img_url
            }
          }
        `,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.errors) {
          throw new Error(data.errors[0].message);
        }
        setProducts(data.data.allProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("GraphQL Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <ListWrapper>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product: any) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              {product.img_url && (
                <Image
                  src={product.img_url}
                  alt={product.name}
                  width={100}
                  height={100}
                />
              )}
              <span>
                {product.name} – £{(product.price / 100).toFixed(2)}
              </span>
            </Link>
          </li>
        ))
      )}
    </ListWrapper>
  );
};

export default ProductList;
