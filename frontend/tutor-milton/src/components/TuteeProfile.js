import React from 'react';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timegridPlugin from '@fullcalendar/timegrid';
import rrulePlugin from '@fullcalendar/rrule';
import {db, firebase} from '../config/firebase-config';
import {useState, useRef} from 'react';
import moment from 'moment';
import AddEventModal from './AddEventModal';

export default () => {

    const calendarRef = useRef(null);

    const onEventAdded = (event) => {
                let calendarApi = calendarRef.current.getApi()
                calendarApi.addEvent({
                    start: moment(event.start).toDate(),
                    end: moment(event.end).toDate(),
                    title: event.title,
                });
                window.location.reload(false);
            }

    const [modalOpen, setModalOpen] = useState(false);

    const handleDateClick = (dateClickInfo:any)=>{
        console.log(dateClickInfo.dateStr)
    }

    const getEvents = (fetchInfo:any, callback:any)=>{
        retrieveData(fetchInfo.start, fetchInfo.end, callback)
    }

    function handleEventAdd(data) {
        console.log("data!!!"+JSON.stringify(data.event))
        console.log("did fire?")
                // console.log("data!!!"+JSON.stringify(data.event))
                // console.log("did fire?")
                // db.collection("users").where("id", "==", String(firebase.auth().currentUser.uid)).set(JSON.parse( JSON.stringify(data)));
                try {db.collection("users").doc(String(firebase.auth().currentUser.uid)).update({
                    freePeriods: firebase.firestore.FieldValue.arrayUnion(JSON.stringify(data.event))
                });} catch(e){
                    console.log(e)
                }
    }


    const retrieveData = async(from:Date, to:Date, callback:any)=>{
    try {
        const filteredData = await db.collection("users").doc(String(firebase.auth().currentUser.uid)).get()
        // await db.collection("users")
        // .startAt(from)
        // .endAt(to).get();


        callback(
            // (snapshot => {
                // snapshot.data().freePeriods.forEach(child => {
                //     console.log("yessir"+child)
                // })
                filteredData.data().freePeriods.map(snapshot=>{
                    const eventt = JSON.parse(snapshot)
                    console.log(eventt)
                    return(
                        {
                    start: moment(eventt["start"]).toDate(),
                    end: moment(eventt["end"]).toDate(),
                    title: eventt["title"],
                        }
                    )
                })
            // })
            // filteredData.docs.map(doc=>{
            //     return (
            //         {
            //             start:doc.data().date_paid.toDate(),
            //             title:`${doc.data().customer}:$${doc.data().amount}`
            //         }
            //     )
            // })
        )
    }
    catch (error){
    alert(`Error retrieving events: ${error}`)
    }
    }
    return(
//         <div className="App-bg">
//              <section>
//              <button onClick={() => setModalOpen(true)} className = "conf-button-event">Add Event</button>
//                 <div style={{position: "relative", zIndex: 0, width: "1300px"}}></div>
//         <FullCalendar
            // ref={calendarRef}
//         events={getEvents}
//         plugins={[daygridPlugin, interactionPlugin, timegridPlugin, rrulePlugin]}
//         initialView="dayGridMonth"
//    eventAdd={(event) => handleEventAdd(event)}
//         dateClick={handleDateClick}
//         header={{
//      left: 'prev,next today',
//      center: 'title',
//      right: 'dayGridMonth,timeGridWeek,timeGridDay'
//      }
//    }
//    editable="true"
//                     selectable="true"
//                     eventClick={
//   function(arg){
//     if (window.confirm('Are you sure you want to delete this event?')==true) {
//         console.log(JSON.stringify(arg.event))
//         try {db.collection("users").doc(String(firebase.auth().currentUser.uid)).update({
//             freePeriods: firebase.firestore.FieldValue.arrayRemove(JSON.stringify(arg.event))
//         });} catch(e){
//             console.log(e)
//         }
// arg.event.remove()
// }
//     // alert(arg.event.title)
//     // alert(arg.event.start)
//   }
// }
//         />
//                  <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
//              </section>
//  </div>


<div className="App-bg">
             <section>
             <button onClick={() => setModalOpen(true)} className = "conf-button-event">Add Event</button>
                 <div style={{position: "relative", zIndex: 0, width: "1300px"}}>
                 <FullCalendar 
                    ref={calendarRef}
                    events={getEvents}
                    plugins={[daygridPlugin, interactionPlugin, timegridPlugin, rrulePlugin]}
                    initialView="dayGridMonth"
                    eventAdd={(event) => handleEventAdd(event)}
                    // datesSet={(date) => handleDatesSet(date)}
                    // initialEvents={() => this.calendarValue}
                    headerToolbar={{
                    left: 'dayGridMonth,timeGridWeek,timeGridDay',
                    center: 'title',
                    right: 'prev,next today'
                    }
                    }
                    editable="true"
                    selectable="true"
                    eventClick={
  function(arg){
    if (window.confirm('Are you sure you want to delete this event?')==true) {
        console.log(JSON.stringify(arg.event))
        try {db.collection("users").doc(String(firebase.auth().currentUser.uid)).update({
            freePeriods: firebase.firestore.FieldValue.arrayRemove(JSON.stringify(arg.event))
        });} catch(e){
            console.log(e)
        }
arg.event.remove()
}
    // alert(arg.event.title)
    // alert(arg.event.start)
  }
}
                />
                </div>
                <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
            </section>
</div>
    )
}


// import React, { Component, useEffect, useRef } from 'react';
// import FullCalendar, { EventApi } from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interaction from '@fullcalendar/interaction';
// import timeGrid, { DayTimeColsView } from '@fullcalendar/timegrid';
// import rrule from '@fullcalendar/rrule';
// import axios from 'axios';
// import { db, firebase } from "../config/firebase-config"


// import Frees from './Frees'
// import Subjects from './Subjects'
// import Sessions from './Sessions'
// import AddFree from './AddFree'
// import { useState } from 'react'
// import './profcomps.css'
// import AddEventModal from './AddEventModal';
// import moment from 'moment';

// function TuteeProfile() { //This needs to be "serverified"

//     const [frees, setFrees] = useState([])
//     const [sessions, setSessions] = useState([])
    

//     const [showAddFree2, setShowAddFree] = useState (false)

//     const [free, setFree] = useState([])
//     const [session, setSession] = useState([])

//     const [modalOpen, setModalOpen] = useState(false);
//     const [events, setEvents] = useState([]);
//     const calendarRef = useRef(null);

//     const onEventAdded = (event) => {
//         // let calendarApi = calendarRef.current.getApi()
//         // calendarApi.addEvent({
//         //     start: moment(event.start).toDate(),
//         //     end: moment(event.end).toDate(),
//         //     title: event.title,
//         // });
//     }

//      function handleEventAdd(data) {
//         console.log("data!!!"+JSON.stringify(data.event))
//         console.log("did fire?")
//         // db.collection("users").where("id", "==", String(firebase.auth().currentUser.uid)).set(JSON.parse( JSON.stringify(data)));
//         // try {db.collection("users").doc(String(firebase.auth().currentUser.uid)).update({
//         //     freePeriods: firebase.firestore.FieldValue.arrayUnion(JSON.stringify(data.event))
//         // });} catch(e){
//         //     console.log(e)
//         // }
//         // await axios.put('https://us-central1-milton-tutor.cloudfunctions.net/user/FDhtGoOP4lebRlKHda6l', data.event);
//         // console.log("here");
//         // const user = firebase.auth.currentUser;
//         // const token = user && (await user.getIdToken());
//         // const res = await fetch("https://us-central1-milton-tutor.cloudfunctions.net/user", {
//         //     method: 'POST',
//         //     headers: {
//         //       'Content-Type': 'application/json',
//         //       Authorization: `Bearer ${token}`,
//         //       'origin': ["https://example.com"]
//         //     },
//         //   });
//         // console.log(res.json());
//         // return res.json();
//     }
//     async function handleDatesSet(data) {
//         console.log("HEREEEE")
//         await db.collection("users").doc(String(firebase.auth().currentUser.uid)).get()
//         .then(snapshot => {
//             snapshot.data().freePeriods.forEach(child => {
//                 console.log("yessir"+child)
//             })
//             console.log("HEREEEE2"+snapshot.data().freePeriods[0])
//             const eventt = JSON.parse(snapshot.data().freePeriods[0])
//             // console.log(eventt["title"])
//             let calendarApi = calendarRef.current.getApi()
//             calendarApi.addEvent({
//                 timeZone: "UTC",
//                 start: moment(eventt["start"]).toDate(),
//                 end: moment(eventt["end"]).toDate(),
//                 title: eventt["title"],
//             });
//             // setEvents(snapshot.data().freePeriods)
//             // frees.map((frees, index)=> {...}
            
//             // snapshot.data().freePeriods.forEach(free =>{
//             //     console.log("FREE!")
//             //     setEvents(free);
//             // })
//             // setUserDetails(snapshot.data())
//         })
//         // console.log("here:"+data)
//         // const response = await axios.get("/api/calendar/get-events?start="+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString());
//         // setEvents(response.data);
//     }

    

//     // const handleDateClick = dateClickInfo => {
        
//     //   };

    
//     // useEffect(() => {
        

//     //     const getFrees = async () => {
//     //         console.log("hey!")
//     //         const res = await axios.get('https://us-central1-milton-tutor.cloudfunctions.net/user/test1')
//     //         const data = await res.data
//     //         console.log("data: "+data.start+data.end+data.title)
//     //         setFrees(data)
//     //     }
//     //     // const getSessions = async () => {
//     //     //     const res = await fetch('http://localhost:5000/sessions')
//     //     //     const data2 = await res.json()
//     //     //     setSessions(data2)
//     //     // }


//     //     getFrees()
//     //     // getSessions()
    

//     // }, [])

//     // const addFree = async (free) => {
//     //     const res = await fetch('http://localhost:5000/frees', {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-type': 'application/json'
//     //     },
//     //     body: JSON.stringify(free)
//     // })

//     // const data  = await res.json()

//     // setFrees([...frees, data])
//     // }


//         return (
//             <div className="App-bg">
//             <section>
//             <button onClick={() => setModalOpen(true)} className = "conf-button-event">Add Event</button>
//                 <div style={{position: "relative", zIndex: 0, width: "1300px"}}>
//                 <FullCalendar 
//                     ref={calendarRef}
//                     events={events}
//                     plugins={[dayGridPlugin, interaction, timeGrid, rrule]}
//                     initialView="dayGridMonth"
//                     eventAdd={(event) => handleEventAdd(event)}
//                     // datesSet={(date) => handleDatesSet(date)}
//                     // initialEvents={() => this.calendarValue}
//                     initialEvents={[
//                 { title: 'event 1', start: '2021-10-15', end: '2021-10-30' },
//                 { title: 'event 2', start: '2021-10-15', end: '2021-10-30'}]}
//                     timeZone="est"
                    
//                     headerToolbar={{
// left: 'dayGridMonth,timeGridWeek,timeGridDay',
// center: 'title',
// right: 'prev,next today'
// }
// }
//                     editable="true"
//                     selectable="true"
//                     eventClick={
//   function(arg){
//     if (window.confirm('Are you sure you want to delete this event?')==true) {
//         console.log(JSON.stringify(arg.event))
//         try {db.collection("users").doc(String(firebase.auth().currentUser.uid)).update({
//             freePeriods: firebase.firestore.FieldValue.arrayRemove(JSON.stringify(arg.event))
//         });} catch(e){
//             console.log(e)
//         }
// arg.event.remove()
// }
//     // alert(arg.event.title)
//     // alert(arg.event.start)
//   }
// }

                    
//                 />
//                 </div>
//                 <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
//             </section>
// </div>

//             /* <div className="App-bg">
                   

//                    <div class="row"> */

//                     /* <div class="column">
//                         <Sessions session = { sessions }/>
//                     </div>
             
//                     <div class="column">

//                     {showAddFree2 && <AddFree onAddFree={addFree}/>}
//                     <Frees free={frees} onAddFree = {()=>setShowAddFree(!showAddFree2)} showAddFree={showAddFree2}/>
                        
//                     </div> */

// //                     <section>
// //                     <button onClick={() => setModalOpen(true)}>Add Event</button>
// //                         <div style={{position: "relative", zIndex: 0}}>
// //                         <FullCalendar 
// //                             ref={calendarRef}
// //                             plugins={[dayGridPlugin, interaction, timeGrid, rrule]}
// //                             initialView="dayGridMonth"
// //                             timeZone="est"
// //                             header={{
// //      left: 'prev,next today',
// //      center: 'title',
// //      right: 'dayGridMonth,timeGridWeek,timeGridDay'
// //      }
// //    }
// //                             editable="true"
// //                             eventClick={
// //           function(arg){
// //             console.log(arg);
// //             if (window.confirm('Are you sure you want to delete this event?')==true) {
// //         arg.event.remove()
// //       }
//             // alert(arg.event.title)
//             // alert(arg.event.start)
//         //   }
//         // }
//     //     eventMouseEnter={
//     //         function(info) {
//     //         var tis=info.el;
//     //         var popup=info.event.extendedProps.popup;
//     //         // var tooltip = '<div class="tooltipevent" style="top:'+($(tis).offset().top-5)+'px;left:'+($(tis).offset().left+($(tis).width())/2)+'px"><div>' + popup.title + '</div><div>' + popup.description + '</div></div>';
//     //         // var $tooltip = $(tooltip).appendTo('body');
//     //         var tooltip = new Tooltip(info.el, {
//     //   title: info.event.extendedProps.title,
//     //   placement: "top",
//     //   trigger: "click",
//     //   container: "body"
//     // });
//     //     }
//     //     }
//         // eventMouseLeave={function(info) {           
//         //     $(info.el).css('z-index', 8);
//         //     $('.tooltipevent').remove();
//         // }}
//         // events={[    
// //    { 
// //      title: 'One Day',
// //       popup: {
// //           title: 'One Day',
// //           description: 'This is the description',
// //       }, 
// //      backgroundColor: '#c1391c',
// //      rrule: {        
// //         dtstart: '2021-08-01T10:30:00',
// //         until: '2021-08-01T19:30:00',        
// //         },          
// //     },    

//     // {     
//     //  title: 'Daily',
//     //  popup: {
//     //       title: 'Daily',
//     //       description: 'This is Daily the description',
//     //   },       
//     //  backgroundColor: '#bcc11c',
//     //  rrule: {        
//     //     freq: 'daily',
//     //     dtstart: '2021-08-02T10:30:00',
//     //     until: '2021-08-05T19:30:00',        
//     //     },          
//     // }, 
//     // {     
//     //  title: 'Weekly Event',
//     //  popup: {
//     //       title: 'Daily',
//     //       description: 'This is Daily the description',
//     //   },             
//     //  backgroundColor: '#1cc1ab',
//     //  rrule: {        
//     //     freq: 'weekly',
//     //     dtstart: '2021-08-06T10:30:00',
//     //     until: '2021-08-20T19:30:00',        
//     //     },          
//     // },    
//     // {     
//     //  title: 'Two Weekly Event',
//     //  popup: {
//     //       title: 'Daily',
//     //       description: 'This is Daily the description',
//     //   },             
//     //  backgroundColor: '#1c60c1',
//     //  rrule: {        
//     //     interval: 2,
//     //     freq: 'weekly',
//     //     dtstart: '2021-08-07T10:30:00',
//     //     until: '2021-08-30T19:30:00',        
//     //     },          
//     // },
//     // {     
//     //  title: 'Four Weekl Event',
//     //  popup: {
//     //       title: 'Daily',
//     //       description: 'This is Daily the description',
//     //   },             
//     //  backgroundColor: '#c11cbc',
//     //  rrule: {        
//     //     interval: 4,
//     //     freq: 'weekly',
//     //     dtstart: '2021-08-01T10:30:00',
//     //     until: '2021-12-30T19:30:00',        
//     //     },          
//     // },       
//     // ]}
//                     //     />
//                     //     </div>
//                     //     <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
//                     // </section>

                    
            
//             //     </div>    
//             // </div>
           
//         );
        
//     }

//     export default TuteeProfile