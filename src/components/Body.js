import RestaurantCard from './RestaurantCard'
import resList from '../utils/mock'
import { useState } from 'react'

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(resList)

    const filterTopRestaurants = () => {
        console.log("user wants to filter restaurants")
        setlistOfRestaurants(listOfRestaurants.filter(item => (item.info.avgRating > 4.5)))
    }

    return (
        <div className='body-container'>
            <div >
                <button className='top-res-btn' onClick={() => {filterTopRestaurants()}}>Top Restaurants</button>
            </div>

            <div className='res-container'>
                {
                    listOfRestaurants.map(restaurants => (
                        <RestaurantCard key={restaurants.info.id} resData={restaurants.info} />

                    ))
                }
            </div >

        </div>
    )
}

export default Body