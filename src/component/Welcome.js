import React, {Component} from "react"
class Welcome extends Component{
    render() {
        return (<div>
            <h1>Class {this.state.message}</h1>
            <button>Subscribe</button>
        </div>)
    }
}

export default Welcome
