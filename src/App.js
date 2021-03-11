import logo from './logo.svg';
import './App.css';
import {useState  , useEffect} from 'react';
import axios from 'axios';
import { Credentials } from './components/Credentials';

function App() {

  const [token, setToken] = useState('');  

  const spotify = Credentials();
  

  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      

      setToken(tokenResponse.data.access_token);

      console.log(token);      
    });

  }, [spotify.ClientId, spotify.ClientSecret]); 

  console.log(token);



  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header> */}      
    </div>
  );
}

export default App;
