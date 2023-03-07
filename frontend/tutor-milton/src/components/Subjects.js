import PropTypes from 'prop-types';
import AddSub from './AddSub'
import './profcomps.css';
import SubjectList from './SubjectList'
import { useState } from 'react'
import React from 'react';
const Subjects = ({ subject, onAddSub, showSub }) => {
    
 
    
    return (
        <div className="prof-container">
        <header className="prof-comp">
            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">My Subjects</span>
                <button className="nav-element nav-button" text ={showSub ? 'close' : 'Add Subject'} onClick = {onAddSub}>Add Subject</button>
            </h1>
            
            < SubjectList subjects = {subject} />

            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">Pending Subjects</span>
            </h1>

            <div className="inner-container">
            <h1 className="top-text">Honors Biology</h1>
            </div>
            
        </header>
    </div>
    )
}

Subjects.defaultProps = {
    subject: "Spanish 2",
}

Subjects.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default Subjects