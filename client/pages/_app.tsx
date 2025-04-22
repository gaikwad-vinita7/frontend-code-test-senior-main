import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { styled } from "styled-components";

const Layout = styled.main`
  padding-top: 100px;
  padding-bottom: 120px;
  min-height: 100vh;
  box-sizing: border-box;
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </div>
  );
};

export default App;
