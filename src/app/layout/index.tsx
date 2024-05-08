import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header, Footer } from "@widgets/layout";
import { useAuthUser } from "@entities/user";
import { Loader } from "@shared/ui";

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const isLoading = useAuthUser();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  if (isLoading) {
    return <Loader isFullPage={true} />;
  }

  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};
