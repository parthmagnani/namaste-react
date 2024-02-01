import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userDetail: null
        }
    }

    componentDidMount(){
        const username = 'parthmagnani';

        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the response data to the console
                // Now you can use the data retrieved from the API in your component state or do something else with it
                this.setState({
                    userDetail: data
                })
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        return (
            <div>
                


                <div>
                    <h2>{this.state?.userDetail?.login}</h2>

                    <img src={this.state?.userDetail?.avatar_url} alt="" className="github_url"/>
                </div>
            </div>

        )
    }
}

export default UserClass