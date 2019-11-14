import React, { Component } from 'react';
import {PostData} from '../../services/PostData2';
import {Redirect} from 'react-router-dom';

class Signup extends Component {

constructor(props){
super(props);
this.state={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    redirect: false,

    }

  this.signup = this.signup.bind(this);
  this.onChange = this.onChange.bind(this); 

    }

Signup(){
    PostData('Signup', this.state).then ((result) => {
    let responseJSON = result;
if(responseJSON.userData){
    sessionStorage.setItem('userData', responseJSON);
    this.setState({redirect: true});
}
    else{
console.log("Signup_ error")
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

  return(
      <div>
          <label>username</label>
          <input type="text" name="firstname" placeholder="Firstname" onChange={this.onChange}></input>
          <label>lastname</label>
          <input type="text" name="lastname" placeholder="Lastname" onChange={this.onChange}></input>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={this.onChange}></input>
          <label>Password</label>
          <input type="password" name="password" placeholder=" Enter your password" onChange={this.onChange}></input>
          <label>Verify Password</label>
          <input type="password" name="password" placeholder=" Re-enter your password" onChange={this.onChange}></input>
          <input type="submit" value='Login' className='bouttonn' onClick={this.login}></input>
    </div>

)
    }

}

export default Signup;