import { useState } from "react"

const Heading = () => {

    const [btn, setBtn] = useState("Login")

    return (
        <div className='heading'>
            <div className='logo-container'>
                <img src={require("/assets/images/order.jpg")} className='logo' />
            </div>
            <div className='nav-item'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Orders</li>
                    <li>Cart</li>
                    <button className="login-logout" onClick={() => setBtn(btn === 'Login' ? 'Logout' : 'Login')}>{btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Heading