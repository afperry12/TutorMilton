import {useState} from 'react'
import './Header.css'
import React from 'react';

function AddSub({onAddSub}) {
    const [subjectText, setSubjectText] = useState('')
    

    const onSubmit = (e) => {
        e.preventDefault()

        if(!subjectText){
            alert('Please add a subject')
            return
        }

        onAddSub({subjectText})

        setSubjectText('')
    }
    
    return(
        <div className="prof-container">
        <form className='prof-comp' onSubmit={onSubmit}>
            <div className='form-control'>
            <span className="top-bar-title-tutor">Add Subject <br/></span>
                <input type='text' placeholder='Add Subject' value={subjectText} onChange={(e)=>
                setSubjectText(e.target.value)} />
                <input type='submit' className = 'nav-element nav-button' value='Add Subject'/>
            </div>
            
        </form>
        </div>
    )
}

export default AddSub