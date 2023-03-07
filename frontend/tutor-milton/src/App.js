// import React, { useState } from "react";
// import { Component } from "react";
// import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
// import firebase from 'firebase';
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import Login from './components/Login';
// import Dashboard from "./components/Dashboard";
// import LandingPage from './components/LandingPage';
// import Error from './components/Error';
// import Header from './components/Header';
// import TuteeProfile from './components/TuteeProfile';
// import TutorProfile from './components/TutorProf';
// import GoogleLogin from './components/googleLogin';
// import TutorRequest from './components/TutorRequest';
// import PairingPage from './components/PairingPage';
// import Modal from 'react-modal';

// import './App.css'

// Modal.setAppElement('#root');

// const App = () => {
//   return (
//     <BrowserRouter>
//         <div>
//           <Header />
//             <Switch>
//             <Route exact path="/" component={Dashboard}/>
//             <Route exact path="/login" component={Login} />
//              {/* <Route path="/" component={LandingPage} exact/>
//              <Route path="/tutorprofile" component={TutorProfile} exact/>
//              <Route path="/tuteeprofile" component={TuteeProfile} exact/>
//              <Route path="/signin" component={GoogleLogin}/>
//              <Route path="/tutorrequests" component={TutorRequest}/>
//              <Route path="/pairing/:id"> <PairingPage /> </Route>
//              <Route path="*" component={Error}/> */}
//            </Switch>
//         </div> 
//       </BrowserRouter>
//   )
// }

// export default App

import React, { useState } from "react";
import { Component } from "react";
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Login from './components/loginButton';
import Dashboard from "./components/loggedIn";
import LandingPage from './components/LandingPage';
import Error from './components/Error';
import Header from './components/Header';
import TuteeProfile from './components/TuteeProfile';
import TutorProfile from './components/TutorProf';
import GoogleLogin from './components/googleLogin';
import TutorRequest from './components/TutorRequest';
import PairingPage from './components/PairingPage';
import Modal from 'react-modal';
import { auth } from "./config/firebase-config"
import LoginButton from './components/loginButton'
import './App.css'

Modal.setAppElement('#root');

class App extends Component {
  state = { isSignedIn: false }
  

  componentDidMount = () => {
    auth.onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  render() {
  return (
    <div className="App-bg">

<BrowserRouter>
<Header />
    {this.state.isSignedIn ? (
      
        
      
        <div>

 
            <Switch>
             <Route exact path="/" component={Dashboard}/>
             <Route path="/tutorprofile" component={TutorProfile} exact/>
             <Route path="/tuteeprofile" component={TuteeProfile} exact/>
             <Route path="/signin" component={GoogleLogin}/>
             <Route path="/tutorrequests" component={TutorRequest}/>
             <Route path="/pairing/:id"> <PairingPage /> </Route>
             <Route path="*" component={Error}/>
           </Switch>
        </div> 
      

      

    ) : (
      
      
      <Route path="*" component={LandingPage} exact/>
      

    )}
    </BrowserRouter>
  </div>
    
  )
}
}

export default App

{/* <Route path="/" component={LandingPage} exact/> */}

{/* <LoggedIn /> */}

{/* <LoginButton /> */}

{/* <LoginButton /> */}