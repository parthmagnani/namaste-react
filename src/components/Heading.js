import { useState } from "react";
import { Link } from "react-router-dom";

const Heading = () => {
    const [btn, setBtn] = useState("Login");

    return (
        <div className="p-2 flex flex-col sm:flex-row justify-between h-auto sm:h-20 bg-pink-200 shadow-lg mb-4">
            <div className="flex justify-center sm:justify-start items-center mb-4 sm:mb-0">
                <img src={require("/assets/images/order.jpg")} className="w-16 h-16 cursor-pointer" alt="logo" />
            </div>
            <div className="flex justify-between items-center w-full sm:w-auto">
                <ul className="flex list-none items-center flex-wrap sm:flex-nowrap">
                    <li className="px-5 text-lg">
                        <Link to="/">Home</Link>
                    </li>
                    {/* <li className="px-5 text-lg">
                        <Link to="/about">About</Link>
                    </li> */}
                    <li className="px-5 text-lg">
                        <Link to="/">Orders</Link>
                    </li>
                    <li className="px-5 text-lg">
                        <Link to="/">Cart</Link>
                    </li>
                </ul>
                <button className="bg-blue-200 rounded px-4 py-2 mt-4 sm:mt-0 ml-0 sm:ml-4" onClick={() => setBtn(btn === 'Login' ? 'Logout' : 'Login')}>{btn}</button>
            </div>
        </div>
    );
};

export default Heading;
