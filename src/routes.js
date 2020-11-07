import Dashboard from "./components/Dashboard";
import Portafolio from "./components/Portafolio";
import Stocks from "./components/stocks/Stocks";

export const routes = [
  { path: "/", component: Dashboard },
  { path: "/portafolio", component: Portafolio },
  { path: "/stock", component: Stocks },
];
