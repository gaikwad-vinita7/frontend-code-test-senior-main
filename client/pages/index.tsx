import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <main style={{ padding: "1rem" }}>
      <div className="home">
        <ProductList />
      </div>
    </main>
  );
}
