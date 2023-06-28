import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('hello')
  }

  sayHello()
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;

//Lesson:
//If you invoke a function in a component, it will trigger on EVERY re-render see sayHello()
//Also if you update state from that function, you will create an infinite loop
//
//So if you don't want this to happen, rely on useEffect instead
