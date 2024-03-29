import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "/vite.svg";
import { routesNav } from "./menuRoutes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav className="overflow-hidden">
            <img src={logo} alt="" className="ml-2 mt-2" />

            <ul>
              {routesNav.map(({ id, name, to }) => {
                return (
                  <li key={id}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Routes>
            {routesNav.map(({ id, Component, path }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
            <Route
              path="/*"
              element={<Navigate to={routesNav[0].to} replace />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
