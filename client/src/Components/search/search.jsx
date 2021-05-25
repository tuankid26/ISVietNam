import React, { Component } from 'react'
import Suggestion from '../Suggestion/suggestion'
import './search.css'
class Search extends Component {
	state = {
		query: '',
		search: '',
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
	handleInputChange = (e) => {
		// console.log(e.keyCode)
		// if (e.keyCode === 8){
		// 	this.setState({search: ''})
		// }
		console.log(e.target.value)
		this.setState({
			query: e.target.value,
			search: e.target.value,

		})
	}
	handleKeyDown = (e) => {
		if (e.keyCode === 8) {
			this.setState({
				search: '',
				query: ''
			})
		}
	}
	handle = (e) => {
		this.setState({ search: e.target.innerHTML })
	}
	Suggest() {
		if (this.state.query.length > 0) {
			return <Suggestion results={this.state.results} filter={this.state.query} handle={(e) => this.handle(e)} />
		}
	}
	render() {
		// console.log(this.state.search)
		return (
			<div className='wrap'>
				<div className='search'>
					{/* <button type="submit" class="searchButton"><i class="fas fa-search"></i></button> */}
					<input
						type='text'
						class="searchTerm"
						placeholder={this.state.search}
						value={this.state.search}
						// onKeyDown={this.handleKeyDown}
						onChange={(e) => this.handleInputChange(e)}
					></input>
					<label htmlFor="" class="searchButton"><i class="fas fa-search"></i></label>
				</div>
				{this.Suggest()}
			</div>
		)
	}
}
export default Search