import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
  state={
    isLoggedIn:false,
    userId:"",
    name:"",
    email:"",
    picture:""
  }
  render() {

    let fbContent;
    if(this.state.isLoggedIn){
      fbContent=null
    }

    else{
      fbContent=(
      <FacebookLogin
      appId="715118099288708"
      autoLoad={true}
      fields="name.email.picture"
      onClick={this.componentClicked}
      callback={this.responseFacebook}
      >

      </FacebookLogin>
      );
    }

    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
