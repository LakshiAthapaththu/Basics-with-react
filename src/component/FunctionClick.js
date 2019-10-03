import React from 'react'

function FunctionClick() {
    function clickHandle() {
        console.log("clicked")
    }


    return(
        <div>
            <button onClick={clickHandle}>Click me</button>
        </div>

    )

}
export default FunctionClick