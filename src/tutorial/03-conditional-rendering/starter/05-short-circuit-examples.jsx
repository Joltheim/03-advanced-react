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

//OR operator is primarily used to show default values when
//fetching from an API (i.e. if API doesn't provide info show default)

//AND operator
