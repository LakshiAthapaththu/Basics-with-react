import React, {Component} from 'react'

class ChildComponent extends Component{
    render() {
        return(
            <div>
                <button onClick={()=>this.props.func('child 1')}>click me</button>
            </div>
        //    if want to pass arguments use arrow functions

        )
    }

}
export default ChildComponent