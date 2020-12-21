import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const App = () => {
    const [query, setQuery] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            setCountries(response.data)
        })
    }, [])

    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    const displayCountries = countries.filter((country) => {
        if (query === "") {
            return ""
        } else if (country.name.toLowerCase().includes(query.toLowerCase())) {
            return country
        } 
    })

    return (
        <Fragment>
            <form action="">
                find countries <input value={query} onChange={handleInputChange} />
            </form>
            <div>
                {
                    displayCountries.length === 1
                    ? displayCountries.map((country) => {
                        return (
                            <div key={country.numericCode}>
                                <p>{country.name}</p>
                                <p>capital: {country.capital}</p>
                                <p>population: {country.population}</p>
                            </div>
                        )
                    })
                    : displayCountries.map((country) => {
                        return (
                            <p key={country.numericCode}>{country.name}</p>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default App 