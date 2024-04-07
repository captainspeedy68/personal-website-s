import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from '../layout/Root';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
    },
]);


export default router;