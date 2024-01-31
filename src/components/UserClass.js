import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <p>Hii from class components</p>
                
                <p>{this.props.name}</p>
                <p>{this.state.count}</p>  

                <button onClick={() => {this.setState({
                    count: this.state.count + 1
                })}}>Increase Count</button>
            </div>

        )
    }
}

export default UserClass