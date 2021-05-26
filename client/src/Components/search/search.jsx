import React, { Component } from 'react'
import Suggestion from '../Suggestion/suggestion'
// import { Redirect, useHistory, Link } from "react-router-dom";
// import { withRouter } from 'react-router-dom';
import './search.css'
class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			query: '',
			search: '',
			results: [],
			redirect: '',
			// history: useHistory(),
		}
	}
	componentDidMount() {
		fetch('http://localhost/ISVietNam/api/place')
			.then(response => { return response.json() })
			.then(data => {
				this.setState({
					results: data.response.place.rows
				})
			})
	}
	handleInputChange = (e) => {
		// console.log(e.target.value)
		this.setState({
			query: e.target.value,
			search: e.target.value,

		})
	}
	handleOnClick =(e)=> {
		e.preventDefault();
		console.log('/place/'.concat(this.state.redirect))
		window.location.href = '/place/'.concat(this.state.redirect)
		// this.props.history.push({
		// 	pathname: '/place/'.concat(this.state.redirect),
		// })
		// console.log('/place/'.concat(this.state.redirect));

		// <Redirect to={'/place/'.concat(this.state.redirect)} />
		// console.log(this.props.h)
		// this.state.history.push('/place'.concat())

	}
	handle = (e) => {
		this.setState({
			search: e.target.innerHTML,
			query: ''
		})
		this.state.results.filter((p) => p.name_place === e.target.innerHTML).map((id) => this.setState({ redirect: id.ID_place }))
	}
	Suggest() {
		if (this.state.query.length > 0) {
			return <Suggestion results={this.state.results} filter={this.state.query} handle={(e) => this.handle(e)} />
		}
	}
	render() {
		return (
			<div className='wrap'>
				<div className='search'>

					<input
						type='text'
						class="searchTerm"
						placeholder="Tìm kiếm địa điểm"
						value={this.state.search}
						onChange={(e) => this.handleInputChange(e)}
					></input>
					<button onClick={(e) => this.handleOnClick(e)} htmlFor="" class="searchButton"><i class="fas fa-search"></i></button>
				</div>

				{this.Suggest()}
			</div>
		)
	}
}
export default Search