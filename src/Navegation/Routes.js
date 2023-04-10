import Login from "../Routes/Login";
import Home from "../Routes/Home";
import Contact from "../Routes/Contact";
import Detail from "../Routes/Detail";
import Favs from "../Routes/Favs";

export const routesNavegation = [
  {
    id: 1,
    path: "/home",
    Component: Home,
  },
  {
    id: 2,
    path: "/favs",
    Component: Favs,
  },
  {
    id: 3,
    path: "/contact",
    Component: Contact,
  },
  {
    id: 4,
    path: "/users/:id",
    Component: Detail,
  },
];

export { Login };
