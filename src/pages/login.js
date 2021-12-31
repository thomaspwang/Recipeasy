import React from 'react';
// import {ReactComponent as Logo} from '../assets/instagram.svg'
import './login.css';
class Login extends React.Component{
    state={
        username:'',
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
                <h1>Login</h1>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input className='inputLogin' name='name' placeholder='username...' required onChange={this.handleChange}/>
                        <input className='inputLogin' type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button className='btnLogin' onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;