import React, { Component } from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import { firebase } from "../config/firebase-config"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

export default class LandingPage extends Component {
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
            
                <h1 className="main-title">Welcome.</h1>
                {/* <NavLink exact to="/tuteeprofile" className="welcome-subtitle">Take me to the tutoring portal</NavLink> */}
            
            <StyledFirebaseAuth className="sign-in-button"
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
            )
        }
    }

