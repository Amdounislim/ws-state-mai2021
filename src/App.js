// import './App.css';
// import Home from "./components/Home"
// function App() {

//   // let person={
//   //   email:"aziz@gmail.com",
//   //   age:20
//   // }


//   return (
//     <div className="App">
//       <Home  name="Ghassen" email="ghassen@gmail.com" age="23" />
//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react'
import Counter from './components/Counter'

export default class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     title:"WS-State"
  //   }
  // }

  state = {
    title: "WS-State",
    obj: {
      name: "Wael",
      age: 25
    },
    arr: ["Bonjour", "Good morning", "ola"],
    count: 0
  }


add=(x)=>{
  this.setState({
    arr:[...this.state.arr, x]
  })
}


  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement =()=>{
    this.setState({
      count:this.state.count-1
    })
  }




  render() {
    return (
      <div>
        {/* <h1>{this.state.title}</h1>
        <p>{this.state.obj.age}</p>
        {this.state.arr.map(el=><p>{el}</p>)} */}
        {/* <button onClick={this.increment}>+</button> */}
        {/* <p>{this.state.counter}</p> */}
        {/* <Counter count={this.state.count} /> */}
        {/* <button onClick={this.decrement} >-</button> */}

        <Counter add={this.add} />
        <div>{this.state.arr.map(el=><p>{el}</p>)}</div>
      </div>
    )
  }
}

