import { LazyExoticComponent, lazy } from "react";
import { ShoppingPageInitializer } from "../state-initializer-function-child/pages/ShoppingPageInitializer";
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
const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout"  */ "../lazyload/layout/LazyLayout"
    )
);

export const routesNav: NavRoute[] = [
  {
    id: "shopPage",
    path: "/",
    to: "/",
    Component: ShoppingPageInitializer,
    name: "ShoppingPage",
  },
  {
    id: "lzy",
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "LazyLayout",
  },
];
