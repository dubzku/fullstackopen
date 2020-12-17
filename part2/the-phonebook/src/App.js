import React, { useState } from 'react'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [ newName, setNewName ] = useState('')

  const handleInputChange = (event) => {
      setNewName(event.target.value)
  }

  const addName = (event) => {
      event.preventDefault()

      if (persons.some(person => person.name === newName)) {
          alert(`${newName} is already added to the phonebook`)
          setNewName('')
      } else {
        const nameObject = {
            name: newName
        }
  
        setPersons(persons.concat(nameObject))
        setNewName('')
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
            persons.map((person, index) => <p key={index}>{person.name}</p>)
        }
      </div>
    </div>
  )
}

export default App