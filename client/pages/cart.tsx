import { styled } from "styled-components";
import { useCartStore } from "../store/cartStore";
import { Product } from "../types";
import Image from "next/image";
import Button from "../components/Button";

const Wrapper = styled.div`
  padding: 2rem;
`;
const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductActions = styled.div`
  padding-left: 1rem;
  width: 100%;

  span {
    margin: 0 1rem;
  }
`;

const ProductName = styled.h3`
  margin: 0 0 1rem 0;
  font-weight: 400;
`;

const ImageContainer = styled.div`
  width: 200px;
  max-width: 300px;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CartPage = () => {
  const { cart, removeFromCart, addToCart } = useCartStore();

  const increaseQty = (item: Product) => {
    addToCart({ ...item, quantity: item.quantity + 1 });
  };

  const decreaseQty = (item: Product, index: number) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: item.quantity - 1 });
    } else {
      removeFromCart(index);
    }
  };

  return (
    <Wrapper>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={item.id} style={{ marginTop: "1rem" }}>
            <ProductContainer>
              {item.img_url && (
                <ImageContainer>
                  <Image
                    src={item.img_url}
                    alt={item.name}
                    width={200}
                    height={200}
                    layout="responsive"
                  />
                </ImageContainer>
              )}
              <ProductActions>
                <ProductName>{item.name}</ProductName>
                <div>
                  <Button
                    onClick={() => decreaseQty(item, index)}
                    variant="circle"
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button onClick={() => increaseQty(item)} variant="circle">
                    +
                  </Button>
                </div>

                <p>£{((item.price / 100) * item.quantity).toFixed(2)}</p>

                <Button onClick={() => removeFromCart(index)} fullWidth>
                  Remove
                </Button>
              </ProductActions>
            </ProductContainer>
          </div>
        ))
      )}
    </Wrapper>
  );
};

export default CartPage;
