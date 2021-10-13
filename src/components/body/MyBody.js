

import React, { Component } from 'react'
import LeftModuleComponent from './left-module/leftModule'
import './MyBody.scss'

export default class MyBody extends Component {
    render() {
        return (
            <div className="my-body-container">
                <div className="left-module">
                    <LeftModuleComponent></LeftModuleComponent>
                </div>
                <div className="center-module"></div>
                <div className="right-module"></div>
            </div>
        )
    }
}
