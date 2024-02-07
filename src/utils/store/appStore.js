const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from './cart/cartSlice'


const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default appStore