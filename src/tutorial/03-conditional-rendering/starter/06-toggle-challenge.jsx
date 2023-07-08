import { useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false)

  const toggleSwitch = () => {
    if (toggle == true) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  return (
    <>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={toggleSwitch}>button</button>
      {toggle && <h3>Toggle ON!</h3>}
    </>
  )
};

export default ToggleChallenge;
