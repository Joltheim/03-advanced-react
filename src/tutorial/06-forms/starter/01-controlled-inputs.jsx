import { useState } from "react";

const ControlledInputs = () => {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //do something?
    console.log(name, email)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input 
          type='text' 
          className='form-input' 
          id='name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input 
          type='email' 
          className='form-input' 
          id='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;

//Lesson
//demonstrated how to use events -- shown as (e) in this example
//to append input values (typed chars) provided by user to the stateValue
//we then logged the state values to console using handleSubmit