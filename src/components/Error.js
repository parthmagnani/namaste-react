import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError()
    console.log("This is err-->>", err)
    
    return(
        <div>
            <h1>Opps!!!</h1>
            <h2>{err.data}</h2>
        </div>
    )
}

export default Error
