import { RES_IMG_URL } from "../utils/constant"

const CategoryItem = (props) => {

    const { menuList } = props

    return (
        <>
            <div>
                <div className="flex justify-between gap-2 py-3">
                    <div >
                        <p>{menuList.itemAttribute.vegClassifier == 'NONVEG' ? '🔴': '🟢'}</p>
                        <h3 className="text-[#3e4152] font-medium text-[16px]">{menuList.name}</h3>
                        <p className="text-[#3e41520] text-[14px]">₹ {menuList.price / 100}</p>
                        <p className="text-[rgba(40,44,63,.45);] text-[1rem] leading-[1.3] mt-2">{menuList.description}</p>
                    </div>
                    <div>
                        <img src={RES_IMG_URL + menuList.imageId} alt="" className="min-w-[120px] min-h-[96px] h-[96px] w-[120px]" />
                    </div>
                </div>

                <hr />
            </div>
        </>
    )
}

export default CategoryItem