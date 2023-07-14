import { people } from '../../../data'
import avatar from '../../../assets/default-avatar.svg'
import React from 'react'

const Person = () => {
    // console.log(people)
    return (
    <>
        <h2>The People</h2>
        {people.map((i) => {
            const {id, name, nickName, images} = i
            return (
                <div key={id}>
                    <h5>name: {name}</h5>
                    {/* <img style={{maxWidth: '150px'}} src={avatar} /> */}
                    {nickName && <h5>alias: "{nickName}"</h5>}
                    <img style={{maxWidth: '100px'}} src={images?.[0]?.small?.url || avatar}/>
                </div>
        )})}  
    </>    
  )
}
export default Person

//Lesson
//You can chain conditionals in object path using ?
//Essentially ask if each step along the way exists, see ln 17
//If not use || operator to render a stock image (avatar)