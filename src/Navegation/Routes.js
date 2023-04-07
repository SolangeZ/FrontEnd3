import Home from "../Routes/Home";
import Favs from "../Routes/Favs";
import Contact from "../Routes/Contact";


export const routesNavegation = [
    {
        id: 1,
        path: '/',
        Component: Home
    },
    {
        id: 2,
        path: '/favs',
        Component: Favs
    },
    {
        id: 3,
        path: '/contact',
        Component: Contact
    }

];
