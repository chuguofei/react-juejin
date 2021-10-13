import React, { Component } from 'react'
import './leftModule.scss'

export default class LeftModule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: [3, 2, 1, 6],
        }
        this.mySort(this.state.array)
    }

    // 冒泡排序
    mySort = arr => {
        for (let index = 0; index < arr.length; index++) {
            for (let j = 0; j < arr.length - 1 - index; j++) {
                if(arr[j] > arr[j+1]){
                    let tmp = arr[j+1]
                    arr[j+1] = arr[j]
                    arr[j] = tmp
                }
            }
        }
        console.log(arr)
    }

    render() {
        return (
            <div>
                <div className="header-handle">
                    <div className="side">
                        <img src="https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg" />
                        <div></div>
                    </div>
                    <div className="side">
                        <div>热度</div>
                        <div>最新</div>
                    </div>
                </div>
            </div>
        )
    }
}
