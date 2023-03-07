import PropTypes from 'prop-types';
import './profcomps.css';
import TutoringList from './TutoringList'
import React from 'react';

const Tutoring = ({ tutee }) => {
    return (
        
        <div className="prof-container">
            
            <header className="prof-comp">
             <h1 className="top-bar-title">
                 <span className="top-bar-title-tutor">Currently Tutoring</span>
             </h1>

             <TutoringList tutees = {tutee} />

             </header>
        

        </div>
        
    )
}


Tutoring.defaultProps = {
    tutee: "John Doe, SP2",
}

Tutoring.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default Tutoring