const RestaurantDetails = (props) => {

    const { restaurnatInformation } = props

    return (
        <div className="mt-8">
            <div className="flex justify-between">
                <div>
                    <h2 className="capatilize text-[#282c3f] font-semibold text-[18px]">{restaurnatInformation.name}</h2>
                    <p className="tezt-[#7e808c] font-normal text-[12px]">{restaurnatInformation.cuisines.join(", ")}</p>
                    <p className="tezt-[#7e808c] font-normal text-[12px]">{restaurnatInformation.areaName}</p>
                </div>
                <div className="shadow-lg px-4 py-1 text-center h-[55px]">
                    <p className="text-[#3d9b6d] font-bold">{restaurnatInformation.avgRatingString}</p>
                    <hr />
                    <p className="text-[#8b8d97] text-[10px] mt-1">10K+ ratings</p>
                </div>

            </div>

        </div>
    )
}

export default RestaurantDetails