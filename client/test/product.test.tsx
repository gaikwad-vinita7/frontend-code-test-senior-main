import { render, fireEvent } from "@testing-library/react";
import ProductDetails from "../components/ProductDetails";
import NavBar from "../components/Header";

const mockProduct = {
  id: 1,
  name: "Mock Octopus Bulb",
  price: 1299,
  description: "A bright and efficient mock bulb.",
  img_url: "/mock-image.jpg",
  quantity: 1,
};

const renderProductPage = () =>
  render(
    <>
      <NavBar />
      <ProductDetails product={mockProduct} />
    </>
  );

test("should be able to render product title, product price and product description", async () => {
  const { getByText } = renderProductPage();

  const productTitle = getByText("Mock Octopus Bulb");
  expect(productTitle).toBeInTheDocument();

  const productPrice = getByText("£12.99");
  expect(productPrice).toBeInTheDocument();

  const productDescription = getByText("A bright and efficient mock bulb.");
  expect(productDescription).toBeInTheDocument();
});

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = renderProductPage();

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = renderProductPage();
  const increaseQuantity = getByText("+");
  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});
