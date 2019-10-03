import React, {Component} from 'react'
import ChildComponent from "./ChildComponent";
class ParentComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "child"
        };
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(msg){
        alert(`hello ${msg}`)
    }
    render(){
        return (
            <div>
                <ChildComponent func ={this.greetParent} >

                </ChildComponent>
            </div>)
    }

}

export default ParentComponent