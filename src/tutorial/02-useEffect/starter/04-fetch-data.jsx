import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const dataPoll = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setUser(data) 
      } catch (error) {
        console.log('error')
      }
    }
    dataPoll()
  }, [])

  return (
    <>
        <h2>fetch data example</h2>
        <ul className='users'>
          {user.map((item) => {
            return (
                <li key={item.id}>
                <img src={item.avatar_url}/>
                <div>
                  <h4>{item.login}</h4>
                  <a href={item.html_url}>profile</a>
                </div>
                </li>
            )
          })}
        </ul>
    </>
  ) 
};
export default FetchData;
