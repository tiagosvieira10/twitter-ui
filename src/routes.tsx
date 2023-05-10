import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([


    {
        path:'/',
        element: <Default/>,
        children:[
            {
                path:'/',
                element: <Timeline/>
            },
            {
                path:'/tweet',
                element: <Status/>
            },
        ]
    }
])