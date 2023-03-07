import { FaTimes } from 'react-icons/fa'
import React from 'react';

const FreeList = ({ frees }) => {
    

    return(
        <div>
            {frees.map((free) => (
                <div className="inner-container">
                    <h1 className="top-text">{free.freeText} <FaTimes style={{ color: 'red', cursor: 'pointer'}}/> </h1>
                </div>
            ))}
        </div>
    )
}

export default FreeList