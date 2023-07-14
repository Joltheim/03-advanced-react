import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [person, setPerson] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.length !== 0) {
      setPerson([...person, { id: person.length + 1, name }])
      setName('')
  }}

  const removeUser = (id) => {
      const newList = person.filter((item) => {return item.id !== id})
      setPerson(newList)
    }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input 
            type='text' 
            className='form-input' 
            id='name'
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      {person.map((item) => {
        const { id, name } = item
        return (
          <div style={{display: 'flex', justifyContent: 'center', margin: '1em'}} key={id}>
            <h4>{name}</h4>
            <button className='btn' style={{marginLeft: '.5em'}} onClick={() => removeUser(id)}>delete</button>
          </div>
        )})}
    </div>
  );
};
export default UserChallenge;
