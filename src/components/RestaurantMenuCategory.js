import { useState } from "react"
import CategoryItem from "./CategoryItem"

const RestaurantMenuCategory = (props) => {

    const { category } = props

    const [showMenu, setShowMenu] = useState(false)

    const showMenuStatus = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="mb-4">
            <div className="flex justify-between cursor-pointer mb-3" onClick={() => showMenuStatus()}>
                <h2 className="text-[#3e4152] font-extrabold text-[16px]">{category.title} ({category.itemCards.length})</h2>
                <p>⬇️</p>
            </div>

            <div>
                {
                    showMenu && category.itemCards.map(item => (
                        <div key={item.card.info.id} >
                            <CategoryItem menuList={item.card.info} />

                        </div>


                    ))
                }
            </div>
        </div>
    )
}

export default RestaurantMenuCategory