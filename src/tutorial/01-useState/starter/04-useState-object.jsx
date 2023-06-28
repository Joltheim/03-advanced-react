import { useState } from 'react';

const data = [
  { id: 1, name: 'john', hobby: 'woodcarving', age: 27 },
  { id: 2, name: 'peter', hobby: 'bicyling', age: 33 },
  { id: 3, name: 'susan', hobby: 'knitting', age: 47 },
  { id: 4, name: 'anna', hobby: 'potato farming', age: 22 },
];

const UseStateObject = () => {
  const [person, setPerson] = useState({
    id: 0,
    name: 'test',
    age: '999',
    hobby: 'licking glue',
  })

  function exampleFunction() {
    return console.log('code goes here')
  }

  const displayPerson = (id) => {
    if (id > 0 && id <= data.length) {
      const newPerson = data.find((entry) => entry.id === id)
      // console.log(newPerson)
      setPerson(newPerson)
    }
  } 

  return (
    <>
      <h2>useState object example</h2>
          <div key={person.id}>
            <h3>name: {person.name}</h3>
            <h3>age: {person.age}</h3>
            <h3>hobby: {person.hobby}</h3>
            <button className='btn' style={{margin: '1rem'}} onClick={() => displayPerson(person.id - 1)}>Prev User</button>
            <button className='btn' onClick={() => displayPerson(person.id + 1)}>Next User</button>
            <div></div>
            <button className='btn' onClick={() => exampleFunction()}>exampleFunction</button>
          </div>
    </>
  )
};

export default UseStateObject;
