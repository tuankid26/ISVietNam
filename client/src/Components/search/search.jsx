import React, {Component} from 'react';
import './search.css'
class Search extends Component {
  render() {
    return(
      <div className="search-box">
        <div className = 'search-location'>
        <input 
          type="text" 
          className="searching__input-text bold" 
          placeholder="Search " 
          id='search-input'
          value={this.props.valueSearch}
          onChange={(event)=>this.props.handleSearch(event.target.value)}
        />
        
        <span className="input-group-btn">
          <button 
            className="btn-info " 
            type="button"
            onClick={()=>this.props.handleSearch('')}
          >
            Tìm kiếm
          </button>
        </span>
        </div>
      </div>
    )
  }
}

export default Search;