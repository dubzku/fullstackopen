import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearchQuery, setNewSearchQuery ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearchQuery={newSearchQuery} handleSearchQueryChange={handleSearchQueryChange} />
      <h3>Add a new</h3>
      <PersonForm 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addToPhoneBook={addToPhoneBook}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} newSearchQuery={newSearchQuery} />
    </div>
  )
}

export default App