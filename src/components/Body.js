import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useNavigate } from 'react-router-dom'
import useRestaurantList from '../utils/Custom-Hooks/useRestaurantList.js'
import useOnlineStatus from '../utils/Custom-Hooks/useOnlineStatus.js'


const Body = () => {

    const navigate = useNavigate()

    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchedValue, setSearchedValue] = useState("")

    const listOfRestaurants = useRestaurantList()

    useEffect(() => {
        setFilteredRestaurants(listOfRestaurants)
    }, [listOfRestaurants])

    const filterTopRestaurants = () => {

        setFilteredRestaurants(listOfRestaurants.filter(item => (item.info.avgRating > 4.5)))
    }

    const status = useOnlineStatus()

    if(!status) return <h1>You are offline </h1>

    return (
        <>



            {
                listOfRestaurants.length ? (
                    <div className='body-container'>

                        <div className='body-header'>
                            <div>
                                <input type="text" onChange={(e) => setSearchedValue(e.target.value)} value={searchedValue} />
                                <button className='top-res-btn' onClick={() => { setFilteredRestaurants(listOfRestaurants.filter(res => res?.info.name?.toLowerCase().includes(searchedValue.toLowerCase()))) }}>search</button>
                            </div>
                            <button className='top-res-btn' onClick={() => { filterTopRestaurants() }}>Top Restaurants</button>
                        </div>

                        <div className='res-container'>
                            {
                                filteredRestaurants.map(restaurants => (
                                    <div key={restaurants.info.id} onClick={() => { console.log(restaurants.info.id); navigate(`/restaurants/${restaurants.info.id}`) }}>
                                        <RestaurantCard resData={restaurants.info} />
                                    </div>

                                ))
                            }
                        </div >


                    </div>
                ) : <Shimmer />
            }
        </>
    )
}

export default Body