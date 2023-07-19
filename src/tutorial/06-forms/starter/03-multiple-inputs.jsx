import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input 
            type='text' 
            className='form-input' 
            id='name' 
            value={user.name} onChange={handleChange}
            name="name" />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' 
            className='form-input' 
            id='email' 
            value={user.email} 
            onChange={handleChange} 
            name='email'  />
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input 
            type='password' 
            className='form-input' 
            id='password' 
            value={user.password} 
            onChange={handleChange} 
            name='password'  />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;

//Lesson
//Rather than setting up multiple states for each input
//You can instead create one state that has an object w/ default values ln 4-9

//Then when you want to update the values of the state through user input
//You're still using the e.target.value method to capture the data
//but now you need to match up the input to the correct key value pair (obj)

//To do this you simply specify a 'name' label in the input tag (matching obj key) see ln. 55
//Then in the the handleChange func, you update the state as usual
//by spreading the state value, and appending new key : values to the end 
//see ln 13 - setUser({...user, [e.target.name]: e.target.value})