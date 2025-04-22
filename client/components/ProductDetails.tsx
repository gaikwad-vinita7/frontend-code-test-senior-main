import { useState } from "react";
import Image from "next/image";

import styled from "styled-components";
import Button from "./Button";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  img_url: string;
  quantity: number;
};

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  border-radius: 16px;
  padding: 0 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductTitle = styled.h1`
  margin-top: 0;
`;

const PriceQtyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: fit-content;
  margin: 1.5rem 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--ice, #f0ffff);
  padding: 0;
  margin: 0;
`;

const QtyControls = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 2rem;
`;

const QtyLabel = styled.span`
  position: absolute;
  top: -1.2rem;
  left: 2.5rem;
  font-size: 0.75rem;
  color: var(--purpleHaze, #a49fc8);
`;

const QtyValue = styled.span`
  margin: 0 8px;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
`;

const Description = styled.div`
  margin-top: 2rem;
  background: var(--hemocyanin);
  padding: 1rem;
  h2 {
    margin: 0;
  }
  p {
    color: #ccc;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    margin-left: -2rem;
    margin-right: -2rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  img {
    border-radius: 16px;
  }
`;

const ProductDetails = ({ product }: { product: Product }) => {
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      img_url: product.img_url,
      quantity: qty,
    };
  };

  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={product.img_url}
          alt={product.name}
          width={300}
          height={300}
          layout="responsive"
        />
      </ImageContainer>
      <div>
        <ProductTitle>{product.name}</ProductTitle>
        <p>25W // Packet of 4</p>

        <PriceQtyWrapper>
          <Price>&pound;{(product.price / 100).toFixed(2)}</Price>

          <QtyControls>
            <QtyLabel>Qty</QtyLabel>
            <Button variant="circle">-</Button>
            <QtyValue title="Current quantity">{qty}</QtyValue>
            <Button variant="circle">+</Button>
          </QtyControls>
        </PriceQtyWrapper>

        <Button onClick={handleAddToCart} fullWidth>
          Add to cart
        </Button>

        <Description className="mt-8">
          <h2>Description</h2>
          <p>{product.description}</p>
        </Description>
      </div>
    </Wrapper>
  );
};

export default ProductDetails;
