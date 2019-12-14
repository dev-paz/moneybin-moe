import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import Cookies from 'universal-cookie';

import 'whatwg-fetch'
import './styles.css'

const LoginPage = (props) => {

const responseGoogle = (response) => {
  var id_token = response["tokenObj"]["id_token"]

  fetch('https://moneybin.herokuapp.com/google_login', {
      method: 'POST',
      headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      mode: 'cors',
      credentials: "include",
      cache: 'default',
      body: JSON.stringify({
      "token" : id_token
    }),
  })
  .then(response => {
    if (response.status == 200) {
      props.history.push('/home')
    }
  })
}

  return (
    <div>
    <GoogleLogin
      clientId="384174299809-87qadht2f8m2dlvgvud87g59bj32agjk.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
    </div>
 )
}

export default LoginPage
