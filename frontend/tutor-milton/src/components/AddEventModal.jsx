/* eslint-disable import/no-anonymous-default-export */

import React, {useState} from "react";
import Modal from "react-modal";

import Datetime from 'react-datetime';
import "./profcomps.css"
import "./react-datetime.css";



export default function ({isOpen, onClose, onEventAdded}) {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [reoccurrence, setReoccurrence]  = useState();

    const onSubmit = (event) => {
        event.preventDefault();
        if(!start){
            alert("add a start date")
            return
        }

        if(!end){
            alert("add an end date")
            return
        }
        
        console.log("title: "+title+" start: "+start+" end: "+end)
        onEventAdded({
            title,
            start,
            end,
            reoccurrence
        })
        onClose();
    }
    
    return(
        
        <Modal className="modal" isOpen={isOpen} onRequestClose={onClose} >
        
        <div className="App-bg">
            <div className="Row">

            
            <div className="background-Form">
            <form onSubmit={onSubmit}>
            
            <div className="title-Box">
                <input placeholder="Title" className="txt-Box" value={title} onChange={e => setTitle(e.target.value)} />
            </div>

            <div className="s-date">
                    <label className="se-Label">Start Date</label>
          
                    <Datetime className="datePicker" value={start} onChange={date => setStart(date)} />
            </div>

            

                <div className="e-date">
                    <br/>
                    <label className="se-Label">End Date</label>
                
                    <Datetime className="datePicker" value={end} onChange={date => setEnd(date)} />
                </div>
                <div className="reocurrence-Label">
                    <br/><br/>
                    <label className="se-Label">Reoccurrence</label>
                
                    {/* <Datetime value={start} onChange={date => setEnd(date)} /> */}
                </div>

                <input type="submit" className="conf-button"></input>
            </form>
            </div>
            </div>
            </div>
        </Modal>
    )
}