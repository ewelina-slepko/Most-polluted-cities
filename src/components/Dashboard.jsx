import React from 'react'
import Info from './Info'
import styles from '../styles/Dashboard.module.css'

class Dashboard extends React.Component {
    state = {
        cities: '',
        currentCountry: '',
        countries: ''
    }
    componentDidMount() {
        fetch('https://api.openaq.org/v1/cities?order_by=country&sort=asc&limit=10000')
            .then(response => response.json())
            .then(json => this.setState({ countries: json }));
    }
    getInfo = (shortcut) => {
        fetch(`https://api.openaq.org/v1/measurements?country=${shortcut}&parameter=pm25&order_by=value&sort=desc&limit=10000`)
            .then(response => response.json())
            .then(json => this.setState({ cities: json }));
    }
    getUniqueCountry = () => {
        const countries = this.state.countries && this.state.countries.results.map((info) => {
            return info.country
        })
        return countries
    }
    sortCities = () => {
        let arr = []
        this.state.cities &&
            (arr = this.state.cities.results.map((info, i) => {
                return ({
                    'city': info.city, 'value': info.value, 'parameter': info.parameter
                })
            }))
        const keys = ['city']
        const filtered = arr.filter(
            (s => o =>
                (k => !s.has(k) && s.add(k))(keys.map(k => o[k]).join('|'))
            )(new Set())
        );
        return filtered.splice(0, 10)
    }
    onChange = (e) => {
        e.preventDefault()
        this.setState({
            currentCountry: e.target.options[e.target.selectedIndex].text
        })
        this.getInfo(e.target.options[e.target.selectedIndex].text)
    }
    render() {
        return (
            <div className={styles.container}>
                <h3>Select the country</h3>
                <form>
                    <select id="countrySelect" onChange={this.onChange}>
                        {[...new Set(this.getUniqueCountry())].map((country) => {
                            return <option value={country} key={country}>{country}</option>
                        })}
                    </select>
                </form>
                <Info />
                {this.sortCities().map((info) => {
                    return <p>{info.city}</p>
                })}

            </div>
        )
    }
}

export default Dashboard;