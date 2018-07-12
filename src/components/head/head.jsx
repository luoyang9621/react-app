import React from 'react'
import './head.scss'
import { Button, Icon, Input }  from 'antd'

class Head extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '深圳',
            isFocus: false
        }
    }

    changeCity () {
        console.log('切换城市')
    }
    openHistory () {
        this.setState({
            isFocus: true
        })
    }

    render() {
        return (
            <header>
                <div className='header-bar'>
                    <div className="header-content clearfix">
                        <div className="fl clearfix">
                            <span className='position-icon'></span>
                            <span>{this.state.city}</span>
                            <span className='pointer' onClick={this.changeCity.bind(this)}>切换城市</span>
                            <span></span>
                        </div>
                        <nav className="fr clearfix">
                            <ul>
                                <li>我的美团</li>
                                <li>手机APP</li>
                                <li>商家中心</li>
                                <li>网站导航</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="header-body">
                    <div className="logo">
                        <img src={require('../../static/img/logo.png')} alt=""/>
                    </div>
                    <div className="search-block">
                        <div className="input-block">
                            <Input placeholder="搜索商家或者地点" onFocus={this.openHistory.bind(this)} /><Button type="primary"><Icon type="search" /></Button>
                        </div>
                        <div className="history-block" style={{display: 'block'}}>
                            <div className="title">热门搜索</div>
                            <div className="list"><span>111</span><span>222</span><span>333</span></div>
                        </div>
                    </div>
                    <div className="tips-block">
                        <span>随时退<Icon type="pay-circle" /></span>
                        <span>不满意免单<Icon type="check" /></span>
                        <span>过期退<Icon type="pay-circle" /></span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Head