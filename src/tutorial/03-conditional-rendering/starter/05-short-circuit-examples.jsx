import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);


  return (
    <>
      <h2>short circuiting!</h2>
      <h3>{text || 'default value'}</h3>
      {text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      <h2>Ternary Operator</h2>
      {/* single line example */}
      <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
      {/* multi line example */}
      {user ? (
        <div>
          <h2>hello there, {user.name}</h2>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </>
  )
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>whatever return</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default ShortCircuitExamples;

//Lessons:
//OR operator is primarily used to show default values when
//fetching from an API (i.e. if API doesn't provide info show default)

//Ternary operator
//syntax: condition ? expression1 : expression 2;
//
//if condition is truthy, return expression1, else return expression2
//see ln. 24 for example
