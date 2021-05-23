import React, { Component } from 'react'
import Suggestion from '../Suggestion/suggestion'
import './search.css'
class Search extends Component {
	state = {
		query: '',
		results: []
	}
	componentDidMount() {
		fetch('http://localhost/ISVietNam/api/place')
			.then(response => { return response.json() })
			.then(data => {
				this.setState({
					results: data.response.place.rows
				})
				console.log(data.response.place.rows)
			})
	}
	handleOnClick = (e) => {
		console.log(e.target.value)
	}
	handleInputChange = (e) => {
		this.setState({
			query: e.target.value,
		})
	}
	Suggest() {
		if (this.state.query.length > 0) {
			return <Suggestion results={this.state.results} filter={this.state.query} />
		}
	}
	render() {
		return (
			<div className='wrap'>
				<div className='search'>
					<input
						type='text'
						class="searchTerm"
						placeholder="Search for..."
						onChange={(e) => this.handleInputChange(e)}
					/>
					<button type="submit" class="searchButton"><i class="fas fa-search"></i></button>
				</div>
				{this.Suggest()}
			</div>
		)
	}
}

export default Search