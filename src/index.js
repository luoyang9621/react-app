import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import './static/css/base.css';
import './static/css/common.css';
import './index.css';


class Header extends React.Component {
    render() {
        return (
            <div className='login-header'>
                <div className="avatar">
                    <img src='{this.props.avatar}' alt=""/>
                </div>
                <p>请先登陆</p>
            </div>
        )
    }
}

class Login extends React.Component {
 render() {
     return (
         <div className='login-wrap'>
             <Header />
         </div>
     )
 }
}



ReactDOM.render(
    <Login/>,
    document.getElementById('root')
);
