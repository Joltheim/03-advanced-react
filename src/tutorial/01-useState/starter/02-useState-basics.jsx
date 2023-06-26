import { useState } from 'react'

const UseStateBasics = () => {

  const [ count, setCount ] = useState(0);

  let handleClick = () => {
    setCount(count + 1)
  }

  let handleClick2 = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h2>useState basics</h2>
      <h4>you did it {count} times</h4>
      <button style={{marginRight: "1rem"}} className='btn' onClick={handleClick}>Do!</button>
      <button className='btn' onClick={handleClick2}>Do Not!</button>
    </>
  ) 
};

export default UseStateBasics;

//Lesson
// 1. useState is a hook provided by React that allows us to rerender a page upon change
// 2. We destructure the useState Array so that we can update it and set a default value (see ln 5)
// 3. To update the state, we modify the second value (setCount) whenever we invoke the handleClick function
