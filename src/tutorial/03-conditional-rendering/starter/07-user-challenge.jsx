import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      name: 'James'
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
  <>
    <h2>user challenge</h2>;
    {user ? (
      <div>
        <h4>hello there, {user.name}</h4>
        <button className="btn" onClick={logout}>logout</button>
      </div>
    ) : (
      <div>
        <h4>please login</h4>
        <button className="btn" onClick={login}>login</button>
      </div>
    )}
  </>
  )
};

export default UserChallenge;
