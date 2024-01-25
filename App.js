import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return (
        <h1 className='heading'>hii from title component</h1>
    )
}

const HeadingComponent = () => {
    return (
        <div>
            <Title />
            <h1 className='heading'>hii from heading component</h1>
        </div>

    )
}

// Above we are using component in component this is also called component composition

const element = (<h1>THis is element</h1>)

const MainComponent = () => {
    return (
        <div>
            {element}
            <h1>We are using element inside component</h1>
        </div>
    )
}

// Here we are using element inside component

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<MainComponent />)