import React, { Component } from 'react';
import {PostData} from '../../services/PUT';
import {Redirect} from 'react-router-dom';

class Birth extends Component {

constructor(props){
super(props);
this.state={
    firstname:'',
    lastname:'',
    birthdate:'',
    redirect: false,

    }

  this.Birth = this.Birth.bind(this);
  this.onChange = this.onChange.bind(this); 

    }

Birth(){
    PostData('Birth', this.state).then ((result) => {
    let responseJSON = result;
if(responseJSON.userData2){
    sessionStorage.setItem('userData2', responseJSON);
    this.setState({redirect: true});
}
    else{
console.log("Birth_ error")
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
          <label>birthdate</label>
          <input type="text" name="birthdate" placeholder="Enter your birthdate" onChange={this.onChange}></input>
          <input type="submit" value='Login' className='bouttonn' onClick={this.login}></input>
    </div>

)
    }

}

export default Birth;