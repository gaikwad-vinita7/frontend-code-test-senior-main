import { render, screen, waitFor } from "@testing-library/react";
import ProductList from "../components/ProductList";

global.fetch = jest.fn();

const mockProducts = [
  {
    id: 1,
    name: "Mock Product 1",
    price: 1299,
    img_url: "/mock-image-1.jpg",
  },
  {
    id: 2,
    name: "Mock Product 2",
    price: 499,
    img_url: "/mock-image-2.jpg",
  },
];

afterEach(() => {
  jest.clearAllMocks();
});

test("renders loading state initially", () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ data: { allProducts: [] } }),
  });

  render(<ProductList />);
  expect(screen.getByText("Loading products...")).toBeInTheDocument();
});

test("renders error message on API failure", async () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok: false,
    status: 500,
  });

  render(<ProductList />);
  await waitFor(() =>
    expect(screen.getByText(/Error loading products/i)).toBeInTheDocument()
  );
});

test("renders products after successful fetch", async () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ data: { allProducts: mockProducts } }),
  });

  render(<ProductList />);

  await waitFor(() => {
    expect(screen.getByText("Mock Product 1 - £12.99")).toBeInTheDocument();
    expect(screen.getByText("Mock Product 2 - £4.99")).toBeInTheDocument();
  });
});
