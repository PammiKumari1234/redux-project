import React from 'react'

const User=(props)=>{
    return(
        <div>
            <h1>User Component {props.data.name} {props.data.age}</h1>
        </div>
    )
}
export default User;