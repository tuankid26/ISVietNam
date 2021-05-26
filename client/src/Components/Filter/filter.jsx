import React, { Component } from 'react'
import './filter.css'
class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            province: 'Hà Nội',
            district: 'Hoàn Kiếm'
        }
        this.handleChangeProvince = this.handleChangeProvince.bind(this)
        this.handleChangeDistrict = this.handleChangeDistrict.bind(this)
    }
    componentDidMount() {
        fetch('http://localhost/ISVietNam/api/place')
            .then(response => { return response.json() })
            .then(data => {
                this.setState({
                    data: data.response.place.rows
                })
            })
    }
    handleChangeProvince(event) {
        this.setState({ province: event.target.value });
    }
    handleChangeDistrict(event) {
        this.setState({ district: event.target.value });
    }
    render() {
        const listProvince = []
        const listDistrict = []
        const { data } = this.state
        // console.log(data)
        data.map((p) => {
            if (listProvince.indexOf(p.province) === -1){
                listProvince.push(p.province)
            }
            return null
        })
        data.filter((p) => p.province === this.state.province).map((op) =>
        {
            if (listDistrict.indexOf(op.district) === -1){
                listDistrict.push(op.district)
            }
            return null
        })
        console.log()
        return (
            <div className='filter'>
                <label htmlFor="">Tỉnh/Thành phố</label>
                <select name={this.state.province} onChange={this.handleChangeProvince}>
                    {listProvince && listProvince.map((p) => <option value={p}>{p}</option>)}
                </select>
                <label htmlFor="">Quận/Huyện</label>
                <select name={this.state.district} onChange={this.handleChangeDistrict}>
                    {listDistrict && listDistrict.map((op) => <option value={op}>{op}</option>)}
                </select>
                    {/* <li key='12312'>123123</li> */}
                    {data.filter((p) => p.district === this.state.district).map((r, k) => {
                        console.log(r.name_place)
                        // <p>{r.name_place}</p>
                        return null
                    })}
            </div>
        )
    }
}
export default Filter;