import PropTypes from 'prop-types';
import './profcomps.css';
import FreeList from './FreeList'
import React from 'react';

const Frees = ({ free, onAddFree, showFree }) => {
    return (
        <div className="prof-container">
        <header className="prof-comp">
            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">My Free Periods</span>
                <button className="nav-element nav-button" text ={showFree ? 'close' : 'Add Subject'} onClick = {onAddFree}>Add Free</button>
                
            </h1>
            < FreeList frees = {free} />
        </header>
        </div>
    )
}

Frees.defaultProps = {
    free: "Wednesday 2nd",
}

Frees.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default Frees