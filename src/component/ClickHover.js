import React, {Component} from 'react'
import UpdatedComponent from "./withCounter";

class ClickHover extends Component{


    render() {
        const {count} = this.props.count;
        return <h3 onMouseOver={this.props.incrementCount}> {this.props.name} Hovered {this.props.count} times</h3>

    }
}
export default UpdatedComponent(ClickHover,5)