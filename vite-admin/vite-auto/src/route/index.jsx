
import { createHashRouter,Navigate } from 'react-router-dom'
import Login from '@/pages/login/'
import Home from '@/pages/home/'
import Account from '@/pages/account/'

import Entry from '@/pages/entry/'


const globalRouters = createHashRouter([
    {
        path:'/login',
        element:<Login />,
    },
    {
        path:'/',
        element:<Entry />,
        children:[
            {
                path:'/home',
                element:<Home />,
            },
            {
                path:'/account',
                element:<Account />,
            },
            {
                path:'/',
                element:<Home />,
            },
            {
                path:'/*',
                element:<Navigate to='/login' />,
            }

        ]
    },
    
   
]);

export default globalRouters