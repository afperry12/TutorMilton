import React, { Component } from "react"
import { firebase } from "../config/firebase-config"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


class LoginButton extends Component {

    uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

    render() {
        return(
        <div className="container">
        <StyledFirebaseAuth className="sign-in-button"
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
        )
    }
}

export default LoginButton