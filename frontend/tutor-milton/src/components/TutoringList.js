import { FaTimes } from 'react-icons/fa'
import React, { useState } from 'react';

const TutoringList = ({ tutees, frees, subject, teacher }) => {
    
    const [tutors, setTutors] = useState([])

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(frees)
        console.log(subject)
        console.log(teacher)
        if(window.confirm("Confirm Pairings?")){
            console.log(tutors)
          
        }
        else{
            return
        }
        
    }

    const onClick = () => {
        setTutors( arr => [ ...arr, `${arr.length}` ]);
    };

    return(
        <form onSubmit={onSubmit}>

            {tutees.map((tut) => ( 
            <div className="inner-container">
                
                    <h2 className="top-text">{tut.name} <input type="checkbox" value={tut.id} onChange={onClick} className="tutor-Button"/> </h2>
                    <h2 className="bottom-text">{tut.time}</h2>
             </div>
        ))}
        <input type="submit" className="conf-button" value="Let's Go!"></input>
        </form>
    )
}

TutoringList.defaultProps = {
    "tutees": [
        {
          "id": 1,
          "name": "John Doe",
          "time": "Wednesday, 3:00 PM"
        },
        {
          "id": 2,
          "name": "Mary Sue",
          "time": "Monday, 9:30 AM"
        },
        {
          "id": 3,
          "name": "Other Name",
          "time": "Friday, 5:00 PM"
        }
      ],
};

export default TutoringList