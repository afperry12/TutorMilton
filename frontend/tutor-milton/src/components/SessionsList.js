import React from 'react';

const TutoringList = ({ sessions }) => {
    

    return(
        <div>
            {sessions.map((ses) => ( //This will need to become formatted in the ListComponent format. Mirror what was done for FreeList and SubjectList
            <div className="inner-container"> 
                <h2 className="top-text">{ses.name}, {ses.class}</h2>
                <h2 className="bottom-text">{ses.time}</h2>  
             </div>
        ))}
        </div>
    )
}

export default TutoringList