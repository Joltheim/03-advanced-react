import { people } from '../../../data'
import React from 'react'

const People = () => {
    // console.log(people)
    return (
    <>
        <h2>The People</h2>
        {people.map((i) => {
            const {id, name, nickName, images} = i
            return (
                <div key={id}>
                    <h4>name: {name}</h4>
                    {nickName && <h4>alias: "{nickName}"</h4>}
                    {images && <img style={{maxWidth: '150px'}} src={images[0].small.url}></img>}
                </div>
        )})}  
    </>    
  )
}
export default People
