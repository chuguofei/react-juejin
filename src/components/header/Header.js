import React, { Component } from 'react'
import './Header.scss'
import { findDOMNode } from 'react-dom'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.languageBoxRef = React.createRef()
        this.state = {
            isShowLanguageList: false,
            languageStyle: {
                top: 0,
                left: 0,
            },
            languageDataOptions: [
                { value: 'android', label: 'Android' },
                { value: 'frontend', label: '前端' },
                { value: 'all', label: '产品' },
                { value: 'all', label: '设计' },
                { value: 'ios', label: 'IOS' },
                { value: 'backend', label: '后端' },
                { value: 'ai', label: '人工智能' },
                { value: 'freebie', label: '运维' },
                { value: 'career', label: '测试' },
            ],
            languageDataItem: null, // 当前选择的语言
        }
        this.state.languageDataItem = this.state.languageDataOptions[0]
    }

    componentDidMount() {
        document.addEventListener('click', event => {
            if (this.state.isShowLanguageList === true && findDOMNode(this.languageBoxRef.current).contains(event.target) === false) {
                this.setState({
                    isShowLanguageList: false,
                })
            }
        })
    }

    componentWillUnmount() {
        document.removeEventListener('click')
    }

    languageClickMeth = e => {
        if (!this.state.isShowLanguageList) {
            this.setState({
                isShowLanguageList: true,
                languageStyle: {
                    top: e.currentTarget.offsetTop + 35,
                    left: e.currentTarget.offsetLeft,
                },
            })
        } else {
            this.setState({
                isShowLanguageList: false,
            })
        }
    }

    /**
     * 头部的语言选择
     * @returns
     */
    languageComponent = () => {
        let { isShowLanguageList, languageDataOptions, languageDataItem } = this.state
        return (
            <>
                <div ref={this.languageBoxRef} className="language-box" onClick={this.languageClickMeth}>
                    <span className="language">{languageDataItem.label}</span>
                    <span className="iconfont icon-arrow-down"></span>
                </div>
                {isShowLanguageList === true ? (
                    <ul className="language-drop-down" style={{ ...this.state.languageStyle }}>
                        {languageDataOptions.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    this.state.languageDataItem = item
                                }}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                ) : null}
            </>
        )
    }

    render() {
        return (
            <div className="my-header-container">
                <div className="header-left">
                    <img className="logo-img" alt="" src="https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/brand.82c24770.svg" />
                    <div className="item">掘金小册</div>
                    <div className="item">下载掘金APP</div>
                    <div className="item">开发者大会</div>
                </div>
                <div className="header-select-warpper">{this.languageComponent()}</div>
                <div className="header-right ">
                    <i className="handle-icon iconfont icon-sun"></i>
                    <i className="handle-icon iconfont icon-buju"></i>
                    <i className="handle-icon iconfont icon-shezhi"></i>
                    <i className="handle-icon iconfont icon-rili"></i>
                    <img alt="" src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3791/5035712059~300x300.image" className="user-photo" />
                </div>
            </div>
        )
    }
}
