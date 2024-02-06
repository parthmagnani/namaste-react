import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Heading from './components/Heading'
import Body from './components/Body'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import UserContext from './utils/UserContext'



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
        <UserContext.Provider value={{loggedInUser: userName}}>
            <div className='app'>
                <Heading />
                <Outlet />
            </div>
        </UserContext.Provider>

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
        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)