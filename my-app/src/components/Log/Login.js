import React, { Component } from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import './Login.css'
class Login extends Component {

constructor(props){
  super(props);
  this.state={
    email:'',
    password:'',
    redirect: false,
  }
  this.login = this.login.bind(this);
  this.onChange = this.onChange.bind(this); 


  isValid() 
    const { email, password } = this.state;
    let valid = false;

    if (email.length > 0 && password.length > 0) {
      valid = true;
    }

    if (email.length === 0) {
      this.setState({ error: 'You must enter an email address' });
    } else if (password.length === 0) {
      this.setState({ error: 'You must enter a password' });
    }

    return valid;
  
}
  login(){
    this.isValid()
    PostData('login', this.state).then ((result) => {
        let responseJSON = result;
        if(responseJSON.userData){
          sessionStorage.setItem('userData', responseJSON);
          this.setState({redirect: true});
        }
        else{
          console.log("Login error")
        }
    });
    }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

render() {

  if(this.state.redirect){
    return(<Redirect to={'/home'}/>)
  }
  return (
    
   <div className="column">
    <h2>Login page</h2>
    <label>Email</label>
    <input type="email" name="email" placeholder="please put your email" onChange={this.onChange}></input>
    <label>Password</label>
    <input type="password" name="password" placeholder="please enter your password" onChange={this.onChange}></input>
    <input type="submit" value='Login' className='boutton' onClick={this.login}></input>
  </div>
   
  );
}
}

export default Login;