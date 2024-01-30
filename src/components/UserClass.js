import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Hii from class components</p>
                {
                    this.props.name
                }
            </div>

        )
    }
}

export default UserClass