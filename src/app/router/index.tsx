import { Routes, Route } from "react-router-dom";
import { routes } from "@shared/config/routes.config";
import { useAuth } from "@entities/user";

export const AppRouter: React.FC = () => {
  const isAuth = useAuth();

  const activeRoutes = isAuth ? routes : routes.filter((item) => !item.authOnly);

  return (
    <Routes>
      {activeRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};
