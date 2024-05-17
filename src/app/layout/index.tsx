import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Footer, Sidebar, Header } from "@widgets/layout";
import { useAuthUser } from "@entities/user";
import { Loader } from "@shared/ui";
import { changeBackgroundOfBody } from "@shared/utils";
import styles from "./Layout.module.scss";

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard");
  const { isLoading, activeUser } = useAuthUser();

  useEffect(() => {
    window.scrollTo(0, 0);
    changeBackgroundOfBody(location.pathname);
  }, [location.pathname, location.hash]);

  if (isLoading) {
    return <Loader isFullPage={true} />;
  }

  return isDashboard ? (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <Header activeUser={activeUser} />
        <div className={styles.wrapper}>
          <div className={styles.content}>{children}</div>
        </div>
      </main>
    </div>
  ) : (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};
