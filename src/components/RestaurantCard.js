import { RES_IMG_URL } from '../utils/constant'

const RestaurantCard = (props) => {
    const { resData } = props

    return (
        <div className='cursor-pointer '>

            <img className="w-full h-[200px] rounded-2xl object-cover"src={RES_IMG_URL + resData.cloudinaryImageId} alt="" />
            <div className="gradient-overlay"></div>
            <p className="max-w-full whitespace-nowrap overflow-hidden overflow-ellipsis text-xl text-[#02060cc0] font-bold mt-2">{resData.name}</p>
            <div style={{display: 'flex', gap: '10px'}} className='res-details-one'>
                <p className='text-rgba font-semibold text-[#02060cc0] mt-0 '>{resData.avgRating} stars </p>
                <p className='text-rgba font-semibold text-[#02060cc0] mt-0 '>*</p>
                <p className='text-rgba font-semibold text-[#02060cc0] mt-0 '>{resData.sla.deliveryTime} min</p>
            </div>
            <p className="text-rgba-60 leading-19 font-light text-base mt-0 mb-6">{resData.cuisines.join(", ")} </p>
            {/* <p className='res-details-two'>{resData.costForTwo}</p> */}
        </div>
    )
}

export const promotedRestaurantCard = (RestaurantCard) => {
    return (props) => {

      
        const { resData } = props

        return(
            <>
                <h4 className='text-[white] font-bold bottom-[41%] absolute text-xl left-[10px] z-10 cursor-pointer'>{resData.aggregatedDiscountInfoV3.header} {resData.aggregatedDiscountInfoV3.subHeader}</h4>
                <RestaurantCard {...props}/>
            </>
        )
    }
}

export default RestaurantCard