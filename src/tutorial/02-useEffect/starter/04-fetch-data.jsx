import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const dataPoll = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data[0])
      } catch (error) {
        console.log('error')
      }
    }
    setUser(dataPoll())
  }, [])

  return (
    <>
        <h2>fetch data example</h2>
        <h4>{user.login}</h4>
        {console.log(user.login)}
    </>
  ) 
};
export default FetchData;
