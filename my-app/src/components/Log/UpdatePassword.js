import React, { Component } from 'react';
import {PostData} from '../../services/PUT2';
import {Redirect} from 'react-router-dom';

class UpdatePassword extends Component {

constructor(props){
super(props);
this.state={
    password_old:'',
    password_new:'',
    password_new_verif:'',
    redirect: false,

    }

  this. UpdatePassword = this.    UpdatePassword.bind(this);
  this.onChange = this.onChange.bind(this); 

    }

UpdatePassword(){
    PostData('UpdatePassword', this.state).then ((result) => {
    let responseJSON = result;
if(responseJSON.userData2){
    sessionStorage.setItem('userData2', responseJSON);
    this.setState({redirect: true});
}
    else{
console.log("UpdatePassword_ error")
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
          <label>password_old</label>
          <input type="text" name="password_old" placeholder="Password_old" onChange={this.onChange}></input>
          <label>password_new</label>
          <input type="text" name="password_new" placeholder="Password_new" onChange={this.onChange}></input>
          <label>password_new_verif</label>
          <input type="text" name="password_new_verif" placeholder="Enter your password_new_verif" onChange={this.onChange}></input>
          <input type="submit" value='Login' className='bouttonn' onClick={this.login}></input>
    </div>

)
    }

}

export default UpdatePassword;