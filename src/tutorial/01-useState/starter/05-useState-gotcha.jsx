import { react, useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const countUp = () => {
    setValue((currentState) => {
      const newState = currentState + 1
      console.log(newState)
      return newState
    })
  }

  return (
    <>
      <h2>useState "gotcha"</h2>
      <h3>value: {value}</h3>
      <button className='btn' onClick={countUp}>button</button>
    </>
  )
};

export default UseStateGotcha;

//Lesson:
//in order to prevent issues, it's best to reference the currentState (provided by React)
//whenever you wish to syncronize actions (like clicking a button in this example) -> see countUp() ln 6-12 