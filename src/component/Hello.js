import React from 'react'

const Hello = () => {
    // return(
    //     <div className= 'dummyClass'>
    //         <h1>
    //             Hellow Vishwas
    //         </h1>
    //     </div>
    //
    // ) jsx syntax (simple)
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement(
             'h1',
             null,
              'Helow Viswas')
        //within the component another componet
        //complex than jsx notation

    )

};




export default Hello