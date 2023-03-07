import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import React from 'react';
import './profcomps.css'

function PairingPage() {

    let { id } = useParams();

    return(
        <div className="App-bg">
            <p class = "prof-comp">Confirm Pairing with {id}?
            <div>
            <button className="can-button">Cancel</button>
            <button className="conf-button">Confirm</button>
            </div>
            </p>
        </div>
    );
}
export default PairingPage