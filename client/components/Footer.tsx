import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--hemocyanin, #100030);
  color: var(--ice, #f0ffff);
  font-size: 0.75rem;
  text-align: center;
  padding: 1rem;
  line-height: 1.6;
  z-index: 100;

  a {
    color: var(--purpleHaze, #a49fc8);
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Octopus Energy Ltd is a company registered in England and Wales.
        Registered number: 09263424. Registered office: 33 Holborn, London, EC1N
        2HT. Trading office: 20–24 Broadwick Street, London, W1F 8HT
      </p>
    </FooterWrapper>
  );
};

export default Footer;
