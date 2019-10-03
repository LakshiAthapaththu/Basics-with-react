import React, {Component} from "react";
import RegComp from "./RegComp";
import PureCom from "./PureCom";

class ParentComp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Lakshika'

        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'Lakshika'
            })
        },2000)
    }

    render() {
        console.log("**********Parent Rendered****************")
        return(

            <div>
                <RegComp name={this.state.name}></RegComp>
                <PureCom name={this.state.name}></PureCom>
            </div>
        )
    }
}
export default ParentComp