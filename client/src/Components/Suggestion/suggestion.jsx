import React from 'react'
import './suggestion.css'
const Suggestions = (props) => {
    const options = props.results.filter(name => (
        name.name_place.toLowerCase().includes((props.filter.toLowerCase()))
    )).map((r, k) => (
        <li key={k.toString()}>
            {r.name_place}
        </li>
    ))
    return <ul className='option' onClick={(e) => {
        console.log(e.target)
    }}>{options}</ul>
}

export default Suggestions