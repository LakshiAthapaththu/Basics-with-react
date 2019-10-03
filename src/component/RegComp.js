import React, {Component} from 'react'

class RegComp extends Component{
    render(){
        console.log('reg component rendered')
        return(
            <div>
                Reg Componenet {this.props.name}
            </div>


        )
    }
}
export default RegComp