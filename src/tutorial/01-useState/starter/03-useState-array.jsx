import { useState } from 'react'

const UseStateArray = () => {
  const [ person, setPerson ] = useState([])
  const [ input, setInput] = useState('')
  const [ selectItem, setSelectItem ] = useState(null)

  const addItem = () => {
    if (input.trim() !== "") {
      const newItem = {
        id: Math.floor(Math.random() * 1000),
        text: input, 
      }
      setPerson([...person, newItem])
      setInput('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addItem()
    }
  }

  const deleteItem = (id) => {
    const filteredList = person.filter((item) => {return item.id !== id})
    setPerson(filteredList)
  }

  const clearList = () => {
    setPerson([])
    setSelectItem(null)
  }

  const randomSelect = () => {
    if (person.length !== 0) {
      let randomIndex = Math.floor(Math.random() * person.length)
      let selectedText = person[randomIndex].text
      console.log(person[randomIndex].text)
      setSelectItem(selectedText)
    }
  }

  return (
    <>
      <h3>Random Selector</h3>
      {selectItem && <h4>Selected Item: {selectItem}</h4>}
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}></input>
      <button className='btn' onClick={addItem}>Add Item</button>
      {person.map((item) => {
        return (
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}} key={item.id}>
            <h4 style={{fontSize: '2.5rem'}}>{item.text}</h4> 
            <button className='btn' style={{margin: "1rem"}} onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        )})}
      <div></div>
      <button style={{marginRight: '2rem'}} className='btn' onClick={randomSelect}>Randomize!</button>
      <button style={{marginTop: '2rem'}} className='btn' onClick={clearList}>Clear</button>
    </>
  ) 
};

export default UseStateArray;
