import React from 'react';
import GoogleLogin from 'react-google-login'
import './App.css';
import Facebook from './Login/Facebook';

function App() {
  const responseGoogle = response =>{
    console.log(response);
    
  }
  return (
    <div className="App">
      <h1>Login with google</h1>
      <GoogleLogin
    clientId="643781148469-ir74daa2gro26in9jabs5m6l477onsgk.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    <Facebook />
    </div>
  );
}

export default App;
