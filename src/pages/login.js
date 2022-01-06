import React, { useState } from 'react';
// import {ReactComponent as Logo} from '../assets/instagram.svg'
import { useNavigate } from "react-router-dom";
import './login.css';
import axios from 'axios';

const loginUrl = "http://localhost:4000/api/login?"

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // const handleChange = (e) =>{
  //     const {name,value} = e.target
  //     this.setState({[name]:value})
  // }

  // handle button click of login form
  //https://www.cluemediator.com/login-app-create-login-form-in-reactjs-using-secure-rest-api
  let history = useNavigate();

  const handleLogin = () => {

    const endpoint = loginUrl + `username=${username.value}` + "&" + `password=${password.value}`;
    console.log(endpoint);
    
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:5000');

    fetch(endpoint, {
        mode: 'cors',
        method: 'GET',
        headers: headers
    })
    .then(result => result.text())
    .then(data => {
      console.log(data);
      if (data === "True") {
        history('/main');
      } else {
        setError("Invalid password and/or username!");
      }
    })


    // let config = {
    //   headers: {
    //     'Access-Control-Allow-Origin' : '*',
    //     'Access-Control-Allow-Credentials' : 'true'
    //   }
    // }

    // axios.get(endpoint, config).then(result => {
    //   console.log(result);
    //   if (result === "True") {
    //     history('/main');
    //   } else {
    //     setError("Invalid password and/or username!");
    //   }
    // })
  }

  return (
    <div className='div-login'>
      <h1>Welcome!</h1>
      <div>
        Username<br />
        <input className='inputLogin' type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input className='inputLogin' type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input className='btnLogin' type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;





// class Login extends React.Component{
//     state={
//         username:'',
//         pwd:''
//     }

//     handleChange = (e) =>{
//         const {name,value} = e.target
//         this.setState({[name]:value})
//     }

//     // handleSubmit = (e) =>{
//     //     e.preventDefault()
//     //     //this.props.isLogin(true)
//     // }

//     handleLogin = () => {
//         this.props.history.push('/main');
//     }

    // render(){
    //     return(
    //         <div className='div-login'>
    //             {/* <div className='div-login-logo'>
    //                 <Logo/>
    //             </div> */}
    //             <h1>Welcome!</h1>
    //             <div>
    //                 <form onSubmit = {this.handleSubmit}>
    //                     <input className='inputLogin' name='name' placeholder='username...' required onChange={this.handleChange}/>
    //                     <input className='inputLogin' type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
    //                     <button className='btnLogin' onSubmit={this.handleLogin}>Log In</button>
    //                     <button className='btnLogin' onSubmit={this.handleSubmit}>Sign Up</button>
    //                 </form>
    //             </div>
    //         </div>
//         )
//     }
// }

// export default Login;