import { people } from '../../../data'
import React from 'react'

const List = () => {
    console.log(people)

    return (
    <>
        <h2>The List</h2>
        {people.map((i) => {
            const {id, name} = i
            return (
                <div key={id}>
                    <h4>{name}</h4>
                </div>
        )})}  
    </>    
  )
}
export default List
