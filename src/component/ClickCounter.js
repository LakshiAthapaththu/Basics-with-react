import React, {Component} from 'react'
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component{

    render() {
        const {count} = this.props.count;
        return <button onClick={this.props.incrementCount}> {this.props.name} Clicked {this.props.count} times</button>

    }
}
export default UpdatedComponent(ClickCounter,10)