import { styled } from "styled-components";
import { Product } from "../types";

interface ProductSpecsProps {
  product: Product;
}

const SpecsWrapper = styled.div`
  max-width: 600px;
  padding: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

const SpecsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
`;

const ProductSpecs = ({ product }: ProductSpecsProps) => {
  return (
    <SpecsWrapper>
      <Title>Specifications</Title>
      <SpecsList>
        <span>Brand</span>
        <span>{product.brand}</span>

        <span>Item weight (g)</span>
        <span>{product.weight}</span>

        <span>Dimensions (cm)</span>
        <span>{`${product.length} x ${product.width} x ${product.height}`}</span>

        <span>Item Model number</span>
        <span>{product.model_code}</span>

        <span>Colour</span>
        <span>{product.colour}</span>
      </SpecsList>
    </SpecsWrapper>
  );
};

export default ProductSpecs;
