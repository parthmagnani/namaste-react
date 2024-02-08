import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Heading from './components/Heading'
import Body from './components/Body'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import appStore from './utils/store/appStore'
import Cart from './components/Cart'



const AppLayout = () => {

    const [userName, setUserName] = useState()

    useEffect(() => {
        // api for authentication

        let data = {
            userName: "Junio NTR"
        }

        setUserName(data.userName)

    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName }}>
                <div className='app'>
                    <Heading />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>


    )
}

const About = lazy(() => import("./components/About"))

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
                element: <Suspense fallback={<h1>rendering</h1>}><About /></Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            },
        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)