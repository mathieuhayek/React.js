import React, { Component } from 'react';
import {PostData} from '../../services/PostData3';
import {Redirect} from 'react-router-dom';

class Ttile extends Component {

constructor(props){
super(props);
this.state={
    title:'',
    content:'',
    article_category_id:'',
    redirect: false,

    }

  this.Ttile = this.Ttile.bind(this);
  this.onChange = this.onChange.bind(this); 

    }

Signup(){
    PostData('Ttile', this.state).then ((result) => {
    let responseJSON = result;
if(responseJSON.userData){
    sessionStorage.setItem('userData', responseJSON);
    this.setState({redirect: true});
}
    else{
console.log("Ttile_ error")
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
          <label>title</label>
          <input type="text" name="title" placeholder="title" onChange={this.onChange}></input>
          <label>content</label>
          <input type="text" name="content" placeholder="content" onChange={this.onChange}></input>
          <label>article_category_id</label>
          <input type="article_category_id" name="article_category_id" placeholder="Enter your article_category_id" onChange={this.onChange}></input>
          <input type="submit" value='Login' className='bouttonn' onClick={this.login}></input>
    </div>

)
    }

}

export default Ttile;