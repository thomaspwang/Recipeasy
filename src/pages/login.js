import React from "react";
import './login.css';

// const Login = () => {
//   return (
//     <div>
//       <h1>
//         login/signup
//       </h1>
//     </div>
//   );
// };





// import {ReactComponent as Logo} from '../../assets/instagram.svg'

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
                <div className='div-login-logo'>
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input className="inputLogin" type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input className="inputLogin" type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button className="buttonLogin" onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;