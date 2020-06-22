import React,{useState} from 'react';
import GoogleLogin from 'react-google-login'
import './App.css';
import Facebook from './Login/Facebook';

function App() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [url,setUrl] = useState("")
  
  const responseGoogle = response =>{
    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    setUrl(response.profileObj.imageUrl)
    console.log(response);
    
  }
  return (
    <div className="App">
      <h1>Login with google</h1>
      <h2>Welcome: {name}</h2>
      <h2>Email: {email}</h2>
      <img src={url} alt={name} />
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
