import React, { useEffect, useState } from 'react';
import Login from './Component/Login.component'
import './App.css';
import { getTokenFromURL } from './logic';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Component/Player.component';
import SignIn from './Component/SignIn.component';
import { useDataLayerValue } from './Component/DataLayer'

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
    
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });
    }

     console.log('I HAVE TOKEN', token);
  }, [])

 //console.log('Person', user);
 //console.log('Alien', token);
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (<SignIn />)
      }
      {/* {Logo} */}
      {/* {Login Button} */}
    </div>
  );
}

export default App;
