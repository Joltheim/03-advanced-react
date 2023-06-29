import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setUser(data)
      } catch (error) {
        console.log('error')
        setIsError(true)
      }
      setIsLoading(false);
    }
    fetchData();
  }, [])
  
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>Error!!!</h2>
  }
  return (
    <>
      <img style={{width:'150px', borderRadius:'25px'}} src={user.avatar_url}></img>
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <h4>{user.bio}</h4>
    </>
  )
};
export default MultipleReturnsFetchData;

//Lesson
//*note* try / catch block does not consider 404 errors to be wrong
//Axios will catch these problems though (to be covered later)