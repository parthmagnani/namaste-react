import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/Custom-Hooks/useRestaurantMenu"

const RestaurantMenu = () => {

    const { resId } = useParams()
    const restaurantInfo = useRestaurantMenu(resId)

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