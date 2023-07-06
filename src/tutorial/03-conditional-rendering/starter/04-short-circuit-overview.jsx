import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');

  return (
    <>
      <h2>short circuit - examples</h2>    
      <h4>Falsy OR: {text || 'hello world'}</h4>
      <h4>Falsy AND: {text && 'hello world'}</h4>
      <h4>Truthy OR: {name || 'hello world'}</h4>
      <h4>Truthy AND: {name && 'hello world'}</h4>
    </>
  )
};

export default ShortCircuitExamples;

//Lesson(s) / Overview

// "Falsey" values in JS
// 1. false
// 2. 0
// 3. ''
// 4. null
// 5. undefined
// 6. NaN  -- not a number

// Short Circuits
// The && operator (logical AND) returns the first operand if "falsey"
// , or the second operand if the first operand is "truthy"

// const x = 0;   --- falsey
// const y = 1;   --- truthy
// console.log(x && y); output: 0 (1st is falsy, so it's returned)
// console.log(y && x); output: 0 (2nd is falsy, so it's returned)

//The || operator (logical OR) returns the first operand if it is "truthy"
//, or the second operand if the first operand is "falsy"

// const x = 0;   --- falsey
// const y = 1;   --- truthy
// console.log(x || y); output: 1 (1st is falsy, so other operand returned)
// console.log(y || x); output: 1 (2nd is falsy, so other operand returned)

//AND OPERATOR && (first operand 'A', 2nd 'B')
//If A = true, return B
//If A = false, return A

//OR Operator ||
//if A = true, return A
//if A = false, return B

//The reason we do this at all, is because we cannot use conditional
//IF statements within JSX returns