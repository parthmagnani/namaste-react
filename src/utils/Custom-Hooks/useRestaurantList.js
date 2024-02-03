import { useEffect, useState } from "react";
import { RES_URL } from "../constant";

const useRestaurantList = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([])

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        try {
            const response = await fetch(RES_URL)
            const data = await response.json()
            setlistOfRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            // setFilteredRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }
    return listOfRestaurants
}

export default useRestaurantList;