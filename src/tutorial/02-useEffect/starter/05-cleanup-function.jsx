import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [state, setState] = useState(false)
  console.log('render')

  const toggleFunction = () => {
    if (state == true) {
      setState(false)
    } else {
      setState(true)
    }
  }

  return (
    <>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => toggleFunction()}>toggle</button>
      {state && <SecondComponent />}
    </>
  ) 
};

const SecondComponent = () => {
  useEffect(() => {
    // console.log('hello')
    const intId = setInterval(()=> {
      // console.log('hello from interval')
    }, 1000)
    return () => {
      clearInterval(intId)
      console.log('cleanup')
    }
  }, [])

  return <h3 style={{marginTop: '1em'}}>conditional element</h3>
}

export default CleanupFunction;

//Lesson (potentially unwanted behavior)
//The SecondComponent is being mounted and unmounted by conditional logic
//in such a case the useEffect will trigger each time, even though second arg is []

//We then added an interval function which logged 'hello from interval'
//The resulting behavior was that the interval would keep running regardless
//of whether or not the component was displayed

//To change this so that the interval would only run when component mounted
//we added a 'cleanup function' - clearInterval (vanilla JS)
//end result is that interval would run while mounted, but stop when unmounted

