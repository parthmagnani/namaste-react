const Heading = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Heading