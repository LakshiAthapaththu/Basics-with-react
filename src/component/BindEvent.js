import React, {Component} from 'react'

class EventBind extends Component{
    constructor(props){
        super(props)

        this.state = {
            message: 'Hello'
        };
        this.changeText = this.changeText.bind(this)
        // sol 3

    }

    // changeText(){
    //     this.setState({
    //        message: "you clicked"
    //     }
    //     )
    // }

    changeText = () => {
        this.setState({
            message: "you clicked"
        })
    };
    // solution 4
    // always try to use 3rd one
    render() {
        return(
            <div>
                <div>{this.state.message}</div>
               {/*<button onClick={this.changeText.bind(this)}>Submit</button>*/}
               {/*1- solution*/}
               {/* <button onClick={() => this.changeText()}>Submit</button>*/}
               {/*2- solution*/}

            </div>
        )}
    }


export default EventBind