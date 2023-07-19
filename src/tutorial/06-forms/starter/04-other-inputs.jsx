import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false)
  const [framework, setFramework] = useState(false)

  const handleShipping = (e) => {
    console.log(e.target.checked)
    setShipping(e.target.checked)
  }

  const handleFramework = (e) => {
    console.log(e.target.value)
    setFramework(e.target.value)
  }

  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type='checkbox' name='shipping' id ='shipping'
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select name='framework' id='framework' value={framework} onChange={handleFramework}>
            {frameworks.map((item) => {
              return (
                <option key={item}>{item}</option>
              )})}
          </select>    
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;

//Lesson - 1
//You can use a checkbox to change the state value
//we setup a 'free shipping' checkbox ln. 18
//then linked this to the useState boolean value for shipping with checked={state}
//then we setup an onChange event handler referencing handleShipping() func
//this function uses the boolean event (checked or unchecked) to update state
//syntax: setShipping(e.target.checked)

//Lesson - 2
//You can do something similar with an dropdown selection box see ln.33
//We mapped over the array values of framework
//We set the value={stateName} & created an onChange event handler referencing
//our handleFramework function. This function updated the state.  