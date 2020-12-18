import React from 'react'

const Persons = ({persons, newSearchQuery}) => {

    const displayList = persons.filter((person) => {
        if (newSearchQuery === '') {
            return person
        } else if (person.name.toLowerCase().includes(newSearchQuery.toLowerCase()) || person.name.toUpperCase().includes(newSearchQuery.toUpperCase())) {
            return person
        }
      })

    return (
        <div>
        {
            displayList.map((person, index) => <p key={index}>{person.name} {person.number}</p>)
        }
      </div>
    )

}

export default Persons