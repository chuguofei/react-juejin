import React, { Component } from 'react'
import './Search.scss'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchVal: '',
            searchDialog: false,
            searchDialogStyle: {
                width: null,
                left: null,
                top: null,
            },
        }
    }

    inputChangeMeth = e => {
        this.setState({
            searchVal: e.target.value,
        })
    }
    // 显示搜索引擎dialog
    searchDialogShow = event => {
        this.setState({
            searchDialog: true,
            searchDialogStyle: {
                width: event.currentTarget.parentElement.offsetWidth + 'px',
                left: event.currentTarget.offsetLeft + 'px',
                top: event.currentTarget.parentElement.offsetTop + 50 + 'px',
            },
        })
    }

    // 关闭弹框
    closeSearchEngineMeth = (e)=>{
        this.setState({
            searchDialog:false
        })
    }

    render() {
        let { searchVal, searchDialog, searchDialogStyle } = this.state
        return (
            <div className="top-search">
                <div className="search-input-box" >
                    <div className="search-engine" onClick={this.searchDialogShow}>
                        <img className="icon-logo" alt="" src="https://www.baidu.com/favicon.ico" />
                        <span className="icon-cls iconfont icon-arrow-down"></span>
                    </div>
                    <div className="input-wapper">
                        <input value={searchVal} onChange={this.inputChangeMeth} placeholder="输入关键词搜索 | tab键切换引擎" />
                        {searchVal.length > 0 ? (
                            <span
                                onClick={() => {
                                    this.setState({
                                        searchVal: '',
                                    })
                                }}
                                className="clear"
                            >
                                x
                            </span>
                        ) : null}
                    </div>
                </div>

                <div className="quick-nav">
                    <span className="title">快捷导航</span>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="lableName">掘金</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* 切换搜索引擎 */}
                {searchDialog ? (
                    <div className="search-choose-dialog" >
                        <div className="bg-conver" onClick={this.closeSearchEngineMeth}></div>
                        <ul className="search-list" onClick={this.closeSearchEngineMeth}  style={{ ...searchDialogStyle }}>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                            <li className="engine-item">
                                <img src="https://juejin.cn/favicon.ico" alt="" />
                                <span className="engine-name">掘金</span>
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        )
    }
}
