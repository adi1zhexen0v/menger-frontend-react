import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header, Footer } from "@widgets/layout";

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};
