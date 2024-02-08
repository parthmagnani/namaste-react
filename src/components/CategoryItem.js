import { useDispatch } from "react-redux"
import { RES_IMG_URL } from "../utils/constant"
import { addItems } from "../utils/store/cart/cartSlice"

const CategoryItem = (props) => {

    const { menuList } = props
    const dispatch = useDispatch()

    const addItemToCart = () => {
        console.log(menuList)
        dispatch(addItems(menuList))
    }

    return (
        <>
            <div className="">
                <div className="flex justify-between gap-2 py-6 items-center">
                    <div >
                        <p>{menuList.itemAttribute.vegClassifier == 'NONVEG' ? '🔴': '🟢'}</p>
                        <h3 className="text-[#3e4152] font-medium text-[16px]">{menuList.name}</h3>
                        <p className="text-[#3e41520] text-[14px]">₹ {menuList.price / 100}</p>
                        <p className="text-[rgba(40,44,63,.45);] text-[1rem] leading-[1.3] mt-2">{menuList.description}</p>
                    </div>
                    <div className="relative">
                        <img src={RES_IMG_URL + menuList.imageId} alt="" className="min-w-[120px] min-h-[96px] h-[96px] w-[120px] rounded" />
                        <button 
                            className="shadow-lg font-semibold text-green-800 rounded py-1 px-2 absolute z-10 bg-white top-[75px] left-[30px]"
                            onClick={() => addItemToCart()}>
                                + ADD
                        </button>
                    </div>
                </div>
                {/* <div className="border border-red-500">
                    <button>+ ADD</button>
                </div> */}
                <hr />
            </div>
        </>
    )
}

export default CategoryItem