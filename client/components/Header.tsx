import Link from "next/link";
import { useCartStore } from "../store/cartStore";
import { styled } from "styled-components";

const HeaderWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  z-index: 1000;
  background: var(--siphon);
`;

const Logo = styled.img`
  width: 200px;
  @media (min-width: 768px) {
    width: 250px;
  }

  height: auto;
  cursor: pointer;
`;

const Quantity = styled.span`
  top: -10px;
  position: absolute;
  color: var(--ice);
`;

const Header = () => {
  const { cart } = useCartStore();

  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <HeaderWrapper aria-label="Main navigation">
      <Link href="/" aria-label="Go to homepage">
        <Logo src="/octopus-logo.svg" alt="Logo" />
      </Link>

      <Link
        href="/cart"
        style={{ position: "relative" }}
        aria-label="View cart"
      >
        <img src="/basket.svg" alt="Basket" width={28} height={28} />
        {totalItems > 0 && (
          <Quantity title="Basket items">{totalItems}</Quantity>
        )}
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
