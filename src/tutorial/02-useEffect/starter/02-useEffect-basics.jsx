import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  useEffect(() => {
    console.log('hello, from useEffect')
  }, [])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;

//Lesson
//useEffect accepts two arguments (first is callback function, second optional)
//if the second argument is set to an empty array [], it will only run on initial render
//
//useEffect cannot return a promise (can't async, but cb function can be async)
