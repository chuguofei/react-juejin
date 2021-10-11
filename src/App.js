import './App.scss'

import React, { Component } from 'react'
import HeaderComponent from './components/header/Header'
import SearchComponent from './components/search/Search'

class App extends Component {
    

    render() {
        return (
            <div className="App">
                <HeaderComponent></HeaderComponent>
                <SearchComponent></SearchComponent>
            </div>
        )
    }
}

export default App
