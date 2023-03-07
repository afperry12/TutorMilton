// import React, { useEffect, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../config/firebase-config";
// import { useAuthState } from "react-firebase-hooks/auth";
// import "./Login.css";
// function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
//   const [user, loading, error] = useAuthState(auth);
//   const history = useHistory();
//   useEffect(() => {
//     if (loading) {
//       // maybe trigger a loading screen
//       return;
//     }
//     // if (auth.currentUser) history.replace("/dashboard");
//   }, [user, loading]);
//   return (
//     <div className="login">
//       <div className="login__container">
//         {/* <input
//           type="text"
//           className="login__textBox"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="E-mail Address"
//         />
//         <input
//           type="password"
//           className="login__textBox"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button
//           className="login__btn"
//           onClick={() => signInWithEmailAndPassword(email, password)}
//         >
//           Login
//         </button> */}
//         <button className="login__btn login__google" onClick={signInWithGoogle}>
//           Login with Google
//         </button>
//         {/* <div>
//           <Link to="/reset">Forgot Password</Link>
//         </div> */}
//         {/* <div>
//           Don't have an account? <Link to="/register">Register</Link> now.
//         </div> */}
//       </div>
//     </div>
//   );
// }
// export default Login;
import React, { Component } from "react"
import { auth } from "../config/firebase-config"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import LoggedIn from './loggedIn'
import LoginButton from './loginButton'
import Header from './Header'
import '../App.css'
import { Redirect } from "react-router"
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
import Dashboard from "./Dashboard";


class Login extends Component {
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
        {this.state.isSignedIn ? (
          
            

            <LoggedIn />
          

        ) : (
          
          
          <LoginButton />

        )}
        
      </div>
    )
  }
}

export default Login

{/* <LoggedIn /> */}
{/* <Route exact path="/" component={Dashboard}/> */}