import React, {Component} from 'react'
import {UserConsumer} from "./UserContext";

class ComponentF_context extends Component{
    render() {
        return (
            <UserConsumer>{
                (username) => {
                    return <div>Hello {username}</div>
                }
            }
            </UserConsumer>)
    }


}
export default ComponentF_context