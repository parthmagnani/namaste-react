import { useState } from "react"
import { Link } from "react-router-dom"

const Heading = () => {

    const [btn, setBtn] = useState("Login")

    return (
        <div className='heading'>
            <div className='logo-container'>
                <img src={require("/assets/images/order.jpg")} className='logo' />
            </div>
            <div className='nav-item'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/">Orders</Link>
                    </li>
                    <li>
                        <Link to="/">Cart</Link>
                    </li>
                    <button className="login-logout" onClick={() => setBtn(btn === 'Login' ? 'Logout' : 'Login')}>{btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Heading