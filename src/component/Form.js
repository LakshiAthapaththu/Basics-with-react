import React, {Component} from 'react'

class  Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            address: '',
            interest: 'react'
        }
    }

    handleUserName = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    handleUserAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    };

    handleUserInterests = (event) => {
        this.setState({
            interest: event.target.value
        })
    };

    handleSubmit = (event) => {
        alert(`${this.state.name} ${this.state.address} ${this.state.interest}`)
        event.preventDefault()
    };




    render() {
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                   <div>
                    <label>User Name</label>
                    <input
                        type='text'
                        value={this.state.name}
                        onChange={this.handleUserName}/>
                   </div>
                   <div>
                       <label>Address</label>
                       <input
                           type='text'
                           value={this.state.address}
                           onChange={this.handleUserAddress}/>
                   </div>
                   <div>
                       <label>Interests</label>
                       <select value={this.state.interest} onChange={this.handleUserInterests}>
                           <option value= 'react'>React</option>
                           <option value= 'node'>Node</option>
                           <option value= 'js'>JS</option>

                       </select>
                   </div>
                   <button type='submit'>Submit</button>
               </form>
            </div>



        )
    }
}
export default Form