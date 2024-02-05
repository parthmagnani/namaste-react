import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/Custom-Hooks/useRestaurantMenu"
import RestaurantDetails from "./RestaurantDetails"
import { useEffect, useState } from "react"
import RestaurantMenuCategory from "./RestaurantMenuCategory"

const RestaurantMenu = () => {

    const { resId } = useParams()
    const restaurantInfo = useRestaurantMenu(resId)

    const [restaurantDetails, setRestaurantDetails] = useState(null)
    const [restaurantMenu, setRestaurantMenu] = useState(null)



    // const { name, cuisines, avgRating, costForTwoMessage } = restaurantDetail

    useEffect(() => {
        console.log("restaurantInfo", restaurantInfo)
        setRestaurantDetails(restaurantInfo)
        if (restaurantInfo != null) {
            const filteredMenu = restaurantInfo[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter((item) =>  item?.card?.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

            setRestaurantMenu(filteredMenu)
        }

    }, [restaurantInfo])



    if (restaurantInfo === null) return <Shimmer />

    // const { itemCards } = restaurantInfo[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card

    return (

        <>
            {
                restaurantDetails != null ? (
                    <div >
                        <div className=" flex justify-center">
                            <div className="w-[50%] ">

                                <RestaurantDetails restaurnatInformation={restaurantDetails[0]?.card?.card?.info} />

                                <div className="mt-6 ">
                                    {
                                        restaurantMenu.map((item) => (

                                            <div  key={item.card.card.title} className=" border-[#f1f1f6] my-5 border-b-8">
                                                <RestaurantMenuCategory category={item.card.card} />

                                            </div>

                                            

                                            
                                        ))

                                        

                                    }
                                </div>
                            </div>
                        </div>



                    </div>


                ) : null
            }
        </>


        // <div className=" flex justify-center">
        //     <div className="w-[70%] border border-green-500">
        //         {
        //             restaurantInfo != null ? (<div>
        //                 <RestaurantDetails restaurnatInformation={restaurantInfo}/>
        //             </div>) : (null)
        //         }

        //     </div>
        //     <h2>{name}</h2>
        //     <p>{avgRating} - {costForTwoMessage}</p>
        //     <p>{cuisines.join(", ")}</p>

        //     <ul>
        //         {
        //             itemCards.map(item => (
        //                 <li key={item?.card?.info?.id}>
        //                     {item?.card?.info?.name} - {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}
        //                 </li>
        //             ))
        //         }
        //     </ul>
        // </div>
    )
}

export default RestaurantMenu