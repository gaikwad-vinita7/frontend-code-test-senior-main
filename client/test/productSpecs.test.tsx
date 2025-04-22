import { render } from "@testing-library/react";
import ProductSpecs from "../components/ProductSpecs";

const mockProduct = {
  id: 1,
  name: "Mock Octopus Bulb",
  price: 1299,
  description: "A bright and efficient mock bulb.",
  img_url: "/mock-image.jpg",
  quantity: 1,
  brand: "Mock brand",
  weight: 70,
  model_code: "MOCKCODE",
  length: 12.6,
  width: 6.2,
  height: 6.2,
  colour: "Silver",
};

const renderProductPage = () =>
  render(
    <>
      <ProductSpecs product={mockProduct} />
    </>
  );

test("should be able to render product specifications", async () => {
  const { getByText } = renderProductPage();

  const productBrand = getByText("Mock brand");
  expect(productBrand).toBeInTheDocument();

  const productWeight = getByText(70);
  expect(productWeight).toBeInTheDocument();

  const productModelCode = getByText("MOCKCODE");
  expect(productModelCode).toBeInTheDocument();

  const productColor = getByText("Silver");
  expect(productColor).toBeInTheDocument();

  const productDimensions = getByText("12.6 x 6.2 x 6.2");
  expect(productDimensions).toBeInTheDocument();
});
