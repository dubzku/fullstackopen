import React, { useState } from 'react'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearchQuery, setNewSearchQuery ] = useState('')

  const handleNameChange = event => setNewName(event.target.value)

  const handleNumberChange = event => setNewNumber(event.target.value)

  const handleSearchQueryChange = event => setNewSearchQuery(event.target.value)

  const addToPhoneBook = (event) => {
      event.preventDefault()

      if (persons.some(person => person.name === newName)) {
          alert(`${newName} is already added to the phonebook`)
          setNewName('')
          setNewNumber('')
      } else {
        const nameObject = {
            name: newName,
            number: newNumber
        }
  
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
      }
  }

  const displayList = persons.filter((person) => {
    if (newSearchQuery === '') {
        return person
    } else if (person.name.toLowerCase().includes(newSearchQuery.toLowerCase()) || person.name.toUpperCase().includes(newSearchQuery.toUpperCase())) {
        return person
    }
  })


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with: <input value={newSearchQuery} onChange={handleSearchQueryChange} />
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addToPhoneBook}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
            displayList.map((person, index) => <p key={index}>{person.name} {person.number}</p>)
        }
      </div>
    </div>
  )
}

export default App