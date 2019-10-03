import React, {Component} from "react";

class ConditionalRendering extends Component{

    constructor(props){
        super(props)

        this.state = {
            loggedIn:true
        }
    }
    render(){
        // if(this.state.loggedIn){
        //     return(
        //         <div>
        //             Welocome wishvas
        //         </div>
        //     )
        // }
        // else {
        //     return(
        //         <div>
        //             Welocome guest
        //         </div>
        //     )
        // }
        // let message
        // if(this.state.loggedIn){
        //     message = <div>Hi Vishwas</div>
        // }
        // else {
        //     message = <div>Hi Guest</div>
        // }
        // return(
        //     message
        // )

        return(
            this.state.loggedIn?
                <div>Hi Vishwas</div>:
                <div>Hi Guest</div>
        )


    }





}
export default ConditionalRendering