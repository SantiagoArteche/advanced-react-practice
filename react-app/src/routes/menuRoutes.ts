import { LazyExoticComponent /*lazy*/ } from "react";
// import { ShoppingPageInitializer } from "../state-initializer-function-child/pages/ShoppingPageInitializer";

// import { About } from "../pages/About";
// import { Users } from "../pages/Users";
import { Register } from "../forms/pages/Register";
import { FormikBasic } from "../forms/pages/FormikBasic";
import { FormikComponents } from "../forms/pages/FormikComponents";
import { FormikAbstract } from "../forms/pages/FormikAbstract";
// import { Home } from "../pages/Home";
// import { NoLazy } from "../lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface NavRoute {
  id: string;
  to: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  path: string;
}

// const Lazy1 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage1"  */ "../lazyload/pages/LazyPage1")
// );
// const Lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2"  */ "../lazyload/pages/LazyPage2")
// );
// const Lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage3"  */ "../lazyload/pages/LazyPage3")
// );
// const LazyLayout = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "LazyLayout"  */ "../lazyload/layout/LazyLayout"
//     )
// );

export const routesNav: NavRoute[] = [
  {
    id: "home",
    path: "/register",
    to: "/register",
    Component: Register,
    name: "Register",
  },
  {
    id: "formik",
    path: "/formik",
    to: "/formik",
    Component: FormikBasic,
    name: "Formik Basic",
  },
  {
    id: "formikContext",
    path: "/formikcontext",
    to: "/formikContext",
    Component: FormikComponents,
    name: "Formik Components",
  },
  {
    id: "formikabstract",
    path: "/formikabstract",
    to: "/formikabstract",
    Component: FormikAbstract,
    name: "Formik Abstract",
  },
];
