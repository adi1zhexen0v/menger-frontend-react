import { routes } from "@shared/config/routes.config";
import { Routes, Route } from "react-router-dom";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};
