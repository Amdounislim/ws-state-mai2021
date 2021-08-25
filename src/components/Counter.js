// import React from 'react'

// const Counter = (props) => {


//     return (
//         <div>
//             {/* <h2>{props.count}</h2> */}
      
//         </div>
//     )
// }

// export default Counter


import React, { Component } from 'react'

export default class Counter extends Component {

    state={
        myInput:""
    }


    handelChange=(e)=>{
        this.setState({
            myInput:e.target.value
        })
    }
   
    render() {
        return (
            <div>
                <input type="text" onChange={this.handelChange} />
                <button onClick={()=>this.props.add(this.state.myInput)}>Add</button>
            </div>
        )
    }
}

