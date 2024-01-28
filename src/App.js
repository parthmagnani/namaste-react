import React from 'react'
import ReactDOM from 'react-dom/client'
import Heading from './components/Heading'
import Body from './components/Body'
import About from './components/About'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div className='app'>
            <Heading />
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)