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
        console.log(data)
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
  //destructure user object
  const { name, avatar_url, company, bio } = user
  return (
    <>
      <img style={{width:'150px', borderRadius:'25px'}} src={avatar_url}></img>
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <h4>{bio}</h4>
    </>
  )
};
export default MultipleReturnsFetchData;

//Lesson
//*note* try / catch block does not consider 404 errors to be wrong
//Axios will catch these problems though (to be covered later)
//
//Additionally if you have multiple returns and wish to destructure
//you have to be careful to only do so after object is given properties
//i.e. in this case after fetchData() updates user value via setUser()