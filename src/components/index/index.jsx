import React from 'react'
import axios from 'axios'
import './index.scss'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            msg: '这个是默认的信息'
        }
    }
    getData () {
        var data = {
            params: {
                limit: 40
            }
        }
        axios.get('/ptapi/getHotCinema').then(res => {
            console.log('res=', res)
        }).then(res => {
            console.log('res=', res)
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className='wrap'>
                {this.state.msg}
            </div>
        )
    }
}

export default Index