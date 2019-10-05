import React from 'react'

const UpdatedComponent = (OriginalComponent, incrementValue) => {
    class NewComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count:0
        }
    }
    incrementCount = () => {
        this.setState(preState => {
            return {count: preState.count +incrementValue}
        })
    };


    render(){
        return <OriginalComponent name = 'Vishawas'
                                  count = {this.state.count}
                                  incrementCount = {this.incrementCount} />
        }

    }
    return NewComponent




};
export default UpdatedComponent