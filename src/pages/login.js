import React from 'react';
// import {ReactComponent as Logo} from '../assets/instagram.svg'
import './login.css';
class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
    }
    render(){
        return(
            <div className='div-login'>
                {/* <div className='div-login-logo'>
                    <Logo/>
                </div> */}
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input className='inputLogin' type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input className='inputLogin' type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button className='btnLogin' onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;