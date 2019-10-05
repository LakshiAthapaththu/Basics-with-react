import React, {Component} from "react";

class Counter2 extends Component{
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        this.setState(preState => {
            return {count: preState.count +1}


        })
    };

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCounter)}
            </div>
        );
    }


}
export default Counter2