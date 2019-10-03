import React, {Component} from 'react'

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    Increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log('call back',this.state.count)})
        // //should use callback function
        // console.log(this.state.count)
        // //this statement can be run before the set statement

        this.setState((preState)=>({
                count: preState.count + 1
            }
        ))
    }

    incrementFive(){
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();

    }

    render() {
        return(
            <div>
            <div>Count - {this.state.count}</div>
            <button onClick={()=>this.incrementFive(this.state)}>Increment</button>
            </div>
        )
    }


}
export default Counter