import { useDispatch, useSelector } from "react-redux"
import CategoryItem from "./CategoryItem"
import { clearItems } from "../utils/store/cart/cartSlice"

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    console.log("cartItems-->>", cartItems)

    const onClearCart = () => {
        dispatch(clearItems())
    }

    return (
        <div>
            <div className=" flex justify-center">
                <div className="w-[50%]">
                    <div className="text-center">
                        <h2 className="font-bold text-[20px]">Cart</h2>
                        <button className="bg-black text-white px-2 py-1 rounded mt-2" onClick={() => onClearCart()}>Clear Cart</button>
                    </div>
                    <div className="mt-6">
                        {
                            cartItems.map(item => (
                                <div key={item.id} >
                                    <CategoryItem menuList={item} />

                                </div>


                            ))
                        }
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Cart