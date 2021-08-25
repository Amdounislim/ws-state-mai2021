import React from 'react'
import propTypes from "prop-types"

const Home = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            <p>{props.age}</p>
        </div>
    )
}

Home.defaultProps={ 
    name:"Foulen",
    age:30
}

Home.propTypes={
    name: propTypes.string,
    email: propTypes.string,
    age: propTypes.number
}





export default Home
