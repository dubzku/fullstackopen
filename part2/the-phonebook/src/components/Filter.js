import React from 'react'

const Filter = ({ newSearchQuery, handleSearchQueryChange }) => {
    return (
        <div>
          filter shown with: <input value={newSearchQuery} onChange={handleSearchQueryChange} />
        </div>
    )

}

export default Filter