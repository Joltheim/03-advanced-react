const ErrorExample = () => {
  
  let count = 0
  
  let handleClick = () => {
    count += 1
    console.log(count)
  }
  
  return (
    <>
      <h2>UseState Error Example</h2>
      <p>{count}</p>
      <button className='btn' onClick={handleClick}>UpVote!</button>
    </>
  )
} 

export default ErrorExample;

//Lesson Objective
// 1. If you do not use "State", you cannot update the rendered page even if function is called correctly
// 2. To trigger a re-render, you must manage the state of the component

//Error: Clicking the button does not update the click count
