import { createBrowserRouter } from "react-router-dom";
import ErrorScreen from "../_global/_error";
import React from "react";
import Layout from "../Layout";

const Home = React.lazy(() => import('../pages/_home'));
const About = React.lazy(() => import('../pages/_about-us'));
const Product = React.lazy(() => import('../pages/_product'));
const Gallery = React.lazy(() => import('../pages/_gallery'));
const Contact = React.lazy(() => import('../pages/_contact'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorScreen />,
        children: [
            { index: true, element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/about-us", element: <About /> },
            { path: "/products", element: <Product /> },
            { path: "/gallery", element: <Gallery /> },
            { path: "/contact", element: <Contact /> },
        ]
    },
]);
export default router;