import { useEffect, useState } from "react"
import { MENU_URL } from "../constant"

const useRestaurantMenu = (resId) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        try {
            const response = await fetch(MENU_URL+ resId)
            const data = await response.json()
            setRestaurantInfo(data?.data?.cards)


        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    return restaurantInfo
}

export default useRestaurantMenu;