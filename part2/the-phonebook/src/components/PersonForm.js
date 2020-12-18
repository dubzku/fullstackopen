import React from 'react'

const PersonForm = ( {newName, handleNameChange, newNumber, handleNumberChange, addToPhoneBook} ) => {
    return (
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
    )
}

export default PersonForm