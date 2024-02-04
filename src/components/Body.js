import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useNavigate } from 'react-router-dom';
import useRestaurantList from '../utils/Custom-Hooks/useRestaurantList.js';
import useOnlineStatus from '../utils/Custom-Hooks/useOnlineStatus.js';

const Body = () => {
    const navigate = useNavigate();
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchedValue, setSearchedValue] = useState("");
    const listOfRestaurants = useRestaurantList();
    
    useEffect(() => {
        setFilteredRestaurants(listOfRestaurants);
    }, [listOfRestaurants]);

    const filterTopRestaurants = () => {
        setFilteredRestaurants(listOfRestaurants.filter(item => item.info.avgRating > 4.5));
    };

    const status = useOnlineStatus();

    if (!status) return <h1>You are offline</h1>;

    return (
        <>
            {listOfRestaurants?.length ? (
                <div className="p-2">
                    <div className='flex flex-col sm:flex-row items-center justify-between mb-6'>
                        <div className="mb-4 sm:mb-0">
                            <input
                                type="text"
                                onChange={(e) => setSearchedValue(e.target.value)}
                                value={searchedValue}
                                className="border"
                                placeholder="Search"
                            />
                            <button className="bg-blue-200 px-4 py-1 rounded ml-2" onClick={() => setFilteredRestaurants(listOfRestaurants.filter(res => res?.info.name?.toLowerCase().includes(searchedValue.toLowerCase())))}>Search</button>
                        </div>
                        <button className="bg-blue-200 px-4 py-1 rounded" onClick={() => filterTopRestaurants()}>Top Restaurants</button>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {filteredRestaurants.map(restaurants => (
                            <div key={restaurants.info.id} onClick={() => { console.log(restaurants.info.id); navigate(`/restaurants/${restaurants.info.id}`) }}>
                                <RestaurantCard resData={restaurants.info} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : <Shimmer />}
        </>
    );
};

export default Body;
