import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      //done fetching
      setIsLoading(false)
    }, 3000);
  }, [])

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;

//lesson
//conditional logic: default state isLoading = true
//which displays ln 14: Loading...
//
//but useEffect is set to run on initial render
//this prompts setTimeout to run after 3 sec and change state to false
//then our conditional logic will return ln 17 instead on re-render
