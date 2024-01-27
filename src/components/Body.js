import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchedValue, setSearchedValue] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2175504&lng=72.93908019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const data = await response.json()
            setlistOfRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    const filterTopRestaurants = () => {

        setFilteredRestaurants(listOfRestaurants.filter(item => (item.info.avgRating > 4.5)))
    }

    return listOfRestaurants.length ? (
        <div className='body-container'>
            <div className='body-header'>
                <div>
                    <input type="text" onChange={(e) => setSearchedValue(e.target.value)} value={searchedValue} />
                    <button className='top-res-btn' onClick={() => {setFilteredRestaurants(listOfRestaurants.filter(res => res?.info.name?.toLowerCase().includes(searchedValue.toLowerCase())))}}>search</button>
                </div>
                <button className='top-res-btn' onClick={() => { filterTopRestaurants() }}>Top Restaurants</button>
            </div>

            <div className='res-container'>
                {
                    filteredRestaurants.map(restaurants => (
                        <RestaurantCard key={restaurants.info.id} resData={restaurants.info} />

                    ))
                }
            </div >


        </div>
    ) : <Shimmer />
}

export default Body