import PropTypes from 'prop-types';
import './profcomps.css';
import SessionsList from './SessionsList';
import React from 'react';

const Sessions = ({ session }) => {
    return (
        <div className="prof-container">
            
            <header className="prof-comp">
             <h1 className="top-bar-title">
                 <span className="top-bar-title-tutor">Currently Tutoring</span>
             </h1>

             <SessionsList sessions = { session } />

             </header>

        </div>
    )
}

// 


Sessions.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default Sessions