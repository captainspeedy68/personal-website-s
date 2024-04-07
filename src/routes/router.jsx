import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from '../layout/Root';
import Articles from '../pages/Articles';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/researches",
                element: <Articles></Articles>,
                loader: () => fetch("http://localhost:8000/researches")
            }
        ]
    },
]);


export default router;