// import React, { Component } from "react"
// import firebase from "../config/firebase-config"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import LoggedIn from './loggedIn'
// import LoginButton from './loginButton'
// import Header from './Header'
// import '../App.css'


// class googleLogin extends Component {
//   state = { isSignedIn: false }
  

//   componentDidMount = () => {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ isSignedIn: !!user })
//       console.log("user", user)
//     })
//   }

//   render() {
//     return (
   
//       <div className="App-bg">
//         {this.state.isSignedIn ? (
          
          

//           <LoggedIn />
          

//         ) : (
          
          
//           <LoginButton />

//         )}
        
//       </div>
//     )
//   }
// }

// export default googleLogin