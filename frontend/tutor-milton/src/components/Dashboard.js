import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, useHistory } from "react-router";
import "./Dashboard.css";
import { auth, db, logout } from "../config/firebase-config";
import {firebase} from "../config/firebase-config"
function Dashboard() {
//   const [user, loading, error] = useAuthState(auth);
//   const [name, setName] = useState("");
//   const history = useHistory();
//   const fetchUserName = async () => {
//     try {
//       const query = await db
//         .collection("users")
//         .where("uid", "==", String(firebase.auth().currentUser.uid))
//         .get();
//         console.log(query);
//       const data = await query.docs[0].data();
//       setName(data.name);
//     } catch (err) {
//       console.error(err);
//       alert("An error occured while fetching user data");
//     }
//   };
//   useEffect(() => {
//     if (loading) return;
//     if (!user) return history.replace("/");
//     fetchUserName();
//   }, [user, loading]);

// useEffect( () => {
//     if(auth.currentUser){
//         let uid = auth.currentUser.uid;

//         db.collection("user").doc(uid)
//         .onSnapshot( snapshot => {
//             setFname(snapshot.fname);
//             setLname(snapshot.lname);
//         })
//     } else{

//     };
// },[auth]);

const [blogs,setBlogs]=useState([])
  const fetchBlogs=async()=>{
    // const response=db.collection('users')
    // .doc(String(firebase.auth().currentUser.uid));
    // const data=await response.get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })

    db.collection("users").where("id", "==", String(firebase.auth().currentUser.uid))
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    // console.log(data);
    // data.docs.forEach(item=>{
    //  setBlogs([...blogs,item.data()])
    // })
  }
  
  useEffect(() => {
    if(auth.currentUser){
    fetchBlogs();
    }
  }, [])
  return (
    // <div className="dashboard">
    //   <div className="dashboard__container">
    //     Logged in as
    //     <div>{name}</div>
    //     {/* <div>{email}</div> */}
    //     <button className="dashboard__btn" onClick={logout}>
    //       Logout
    //     </button>
    //   </div>
    // </div>

//         <div className="dashboard">
//       <div className="dashboard__container">
//     <div className="App">
//     <h4>Home</h4>
//     <button onClick={()=> auth.signOut()}>Sign out</button>
//       {
//         blogs && blogs.map(blog=>{
//           return(
//             <div className="blog-container">
//             <h1>Home</h1>
//               <h4>{blog.email}</h4>
//               <p>{blog.displayName}</p>
//             </div>
//           )
//         })
//       }
//     </div>
//    </div>
//  </div>
<span>
                <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                <img
                    alt="profile picture"
                    src={firebase.auth().currentUser.photoURL}
                    className="prof-img"
                />
                <br/>
                <div className="signout-Div">
                <button className="conf-button" onClick={this.signOut}>Sign Out!</button>
                </div>
            </span>
  );
}
export default Dashboard;