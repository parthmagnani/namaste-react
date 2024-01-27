import { RES_IMG_URL } from '../utils/constant'

const RestaurantCard = (props) => {
    const { resData } = props

    return (
        <div className='res-card zoom-out'>

            <img className='res-logo' src={RES_IMG_URL + resData.cloudinaryImageId} alt="" />
            <p className='res-name'>{resData.name}</p>
            <div style={{display: 'flex', gap: '10px'}} className='res-details-one'>
                <p>{resData.avgRating} stars </p>
                <p>*</p>
                <p>{resData.sla.deliveryTime} min</p>
            </div>
            <p className='res-details-two'>{resData.cuisines.join(", ")} </p>
            {/* <p className='res-details-two'>{resData.costForTwo}</p> */}
        </div>
    )
}

export default RestaurantCard