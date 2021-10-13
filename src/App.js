import './App.scss'

import React, { Component } from 'react'
import HeaderComponent from './components/header/Header'
import SearchComponent from './components/search/Search'
import MyBodyComponent from './components/body/MyBody'
class App extends Component {
    

    render() {
        return (
            <div className="App">
                <HeaderComponent></HeaderComponent>
                <SearchComponent></SearchComponent>
                <MyBodyComponent></MyBodyComponent>
            </div>
        )
    }
}

export default App
