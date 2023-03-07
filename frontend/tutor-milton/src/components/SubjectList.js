import { FaTimes } from 'react-icons/fa'
import React from 'react';
const SubjectList = ({ subjects }) => {
    

    return(
        <div>
            {subjects.map((sub) => (
                <div className="inner-container">
                    <h1 className="top-text">{sub.subjectText} <FaTimes style={{ color: 'red', cursor: 'pointer'}}/> </h1>
                </div>
            ))}
        </div>
    )
}

export default SubjectList