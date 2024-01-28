import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import { MENU_URL } from '../utils/constant'

const RestaurantMenu = () => {

    const { resId } = useParams()

    const [restaurantInfo, setRestaurantInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {84713
        try {
            const response = await fetch(MENU_URL+ resId)
            const data = await response.json()
            setRestaurantInfo(data?.data?.cards)


        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    if (restaurantInfo === null) return <Shimmer />

    const { name, cuisines, avgRating, costForTwoMessage } = restaurantInfo[0]?.card?.card?.info
    const { itemCards } = restaurantInfo[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card

    return (
        <div>
            <h2>{name}</h2>
            <p>{avgRating} - {costForTwoMessage}</p>
            <p>{cuisines.join(", ")}</p>

            <ul>
                {
                    itemCards.map(item => (
                        <li key={item?.card?.info?.id}>
                            {item?.card?.info?.name} - {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu