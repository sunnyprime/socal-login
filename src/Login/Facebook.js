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

  componentClicked = () => {
    console.log("Clicked");
    
  }

  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedIn:true,
      userId:response.userId,
      name:response.name,
      email:response.email,
      picture:response.picture.data.url
    })
  }
  

  render() {

    let fbContent;
    if(this.state.isLoggedIn){
      fbContent = (
        <div style={{width:"400px",margin:"auto",background:"#f4f4f4",padding:"20px"}}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome: {this.state.name}</h2>
          <h2>Email: {this.state.email}</h2>
        </div>
      )
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
