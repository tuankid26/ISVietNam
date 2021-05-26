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
    const List = <div id='list'>
        <ul id='list'  className='option' onClick={(e) => { props.handle(e) }}>{options}
        </ul>
    </div>
    return List

}
export default Suggestions