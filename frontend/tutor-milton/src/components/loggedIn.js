import React, { Component, useState, useEffect} from "react"
import {firebase, db, auth} from "../config/firebase-config"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './Header.css'

function LoggedIn () {

    async function signOut(e) {

        e.preventDefault()

        if(window.confirm("Are you sure you want to sign out?")){
            await firebase.auth().signOut().then(function() {
                console.log("Successfully signed out.")
          
              }).catch(function(error) {
                console.log(error)
                console.log("An error occurred")
              });
        }

        else{
            return
        }
    
        
      }
      const [info , setInfo] = useState([]);

    const Read = async () => {
        console.log("here2")
    const users = await firebase.firestore().collection("users").doc(String(firebase.auth().currentUser.uid)).get()
    .then(snapshot => {
        console.log(snapshot.data())
        // setUserDetails(snapshot.data())
    })
    // users.get().then((querySnapshot) => {
    //     const tempDoc = querySnapshot.docs.map((doc) => {
            
    //       console.log(doc.data().dorm)
    //         return { id: doc.id, ...doc.data() }
    //       })
    //       console.log(tempDoc)
    // })
  
    // Start the fetch operation as soon as
    // the page loads
    // window.addEventListener('load', async () => {
    //     await Fetchdata();
    //     console.log("here!4")
    //   });
    // await Fetchdata();
  
    // Fetch the required data using the get() method

        // await db.collection("data").get().then((querySnapshot) => {
        //      console.log("here5"+querySnapshot)
        //     // Loop through the data and store
        //     // it in array to display
        //     querySnapshot.forEach(element => {
        //         console.log("here6")
        //         var data = element.data();
        //         console.log("here7")
        //         setInfo(arr => [...arr , data]);
        //         console.log("data: "+data)
        //     });
        // })
    
}

//       const [blogs,setBlogs]=useState([])
//   const fetchBlogs=async()=>{
//     // const response=db.collection('users')
//     // .doc(String(firebase.auth().currentUser.uid));
//     // const data=await response.get()
//     // .then((querySnapshot) => {
//     //     querySnapshot.forEach((doc) => {
//     //         // doc.data() is never undefined for query doc snapshots
//     //         console.log(doc.id, " => ", doc.data());
//     //     });
//     // })

//     db.collection("users").where("id", "==", String(firebase.auth().currentUser.uid))
//     .get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//             console.log("here1: "+doc.id, " => ", doc.data());
//             console.log("here2: "+doc.data);
//     doc.data.docs.forEach(item=>{
//      setBlogs([...blogs,item.data()])
//     })
//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });

//   }
  
  useEffect(() => {
    console.log("here!")
    if(auth.currentUser){
    // fetchBlogs();
    Read();
    console.log("here! 3")
    }
  }, [])


        return(
            <span>
                <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                <img
                    alt="profile picture"
                    src={firebase.auth().currentUser.photoURL}
                    className="prof-img"
                />
                <br/>
                <div className="signout-Div">
                <button className="conf-button" onClick={signOut}>Sign Out!</button>
                </div>
                <div className="dashboard">
       <div className="dashboard__container">
     <div className="App">
     <h4>Home</h4>
     <button onClick={()=> firebase.auth().signOut()}>Sign out</button>
       {/* {
         blogs && blogs.map(blog=>{
          return(
             <div className="blog-container">
             <h1>Home</h1>
               <h4>{blog.email}</h4>
               <p>{blog.displayName}</p>
             </div>
           )
         })
       } */}

       {
            info.map((data) => (
            <Frame course={data.email} 
                   name={data.displayName} 
                   age={data.gradYear}/>
            ))
        }

     </div>
    </div>
  </div>
            </span>
            )
    
}
const Frame = ({course , name , age}) => {
    console.log(course + " " + name + " " + age);
    return (
        <center>
            <div className="div">
                  
<p>NAME : {name}</p>
   
                  
<p>Age : {age}</p>
  
                  
<p>Course : {course}</p>
   
            </div>
        </center>
    );
}
export default LoggedIn