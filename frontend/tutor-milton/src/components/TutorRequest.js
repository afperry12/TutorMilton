import React, { Component, useState } from 'react';
import TutorsModal from './TutorsModal'
import Frees from './Frees'
import Subjects from './Subjects'
import Sessions from './Sessions'
import './profcomps.css'

function TutorRequest() {
    
    


        const [email1, setEmail1] = useState('')
        const [class1, setClass1] = useState('')
        const [free, setFree] = useState('')

        const [email2, setEmail2] = useState('')
        const [class2, setClass2] = useState('')

        const [modalOpen, setModalOpen] = useState(false);



        const onSubmit1 = (e) =>{
            e.preventDefault()

            if(/\d/.test(email1) || email1.includes("@milton.edu")==false){
                alert('invalid email')
                return
            }
            else if(!class1){
                alert('please select a course')
                return
            }
            else if(!free){
                alert('please select a free')
                return
            }
            console.log(email1)
            console.log(class1)
            console.log(free)

            //Add new page thing here
            setModalOpen(true)
        }

        const onSubmit2 = (e) =>{
            e.preventDefault()

            if(/\d/.test(email2) || email2.includes("@milton.edu")==false){
                alert('invalid email')
                return
            }

            else if(!class2){
                alert('please select a course')
                return
            }

            if(window.confirm("Confirm Request?")){
                console.log(email2)
                console.log(class2)
            }
            else{
                return
            }
        }


        return (

            
         
            <div className="App-bg">
                   

                   <div class="row">

                    <div class="column">
                    <div className="profComp">
                    <p>Click here to request tutoring</p>
                    <form id="request-form" onSubmit={ onSubmit1 }>
                    <div class="dropdown">
                        <select onclick="myFunction()" class="dropbtn" onChange={(e)=> setClass1(e.target.value)}>
                        
                            <option selected disabled className="dropbtn-Title">Select a course</option>
                            <option disabled>Classics</option>
                            <option value="Intensive Classical Greek">Intensive Classical Greek</option>
                            <option value="Adv Greek: Plato">Adv Greek: Plato</option>
                            <option value="Latin 2/3 (Accelerated">Latin 2/3 (Accelerated)</option>
                            <option value="Adv Latin: Rom Elegy + Lyr (1/2)">Adv Latin: Rom Elegy + Lyr (1/2)</option>
                            <option value="Latin Literature (AP)">Latin Literature (AP)</option>
                            <option value="Adv Latin: Roman Philosophy (Sem 1)">Adv Latin: Roman Philosophy (Sem 1)</option>
                            <option value="Adv Latin: Selected Read (Sem 2)">Adv Latin: Selected Read (Sem 2)</option>
                            <option value="Latin 1">Latin 1</option>
                            <option value="Latin 2">Latin 2</option>
                            <option value="Latin 3">Latin 3</option>
                            <option value="Latin 4: Lit of the Golden Age">Latin 4: Lit of the Golden Age</option>
                            
                            <option disabled>Computer Programming</option>
                            <option value="Computer Programming 1 (1/2)">Computer Programming 1 (1/2)</option>
                            <option value="Comp Prog 2/3: Prog + Apps">Comp Prog 2/3: Prog + Apps</option>
                            <option value="Computer Programming 2 (1/2)">Computer Programming 2 (1/2)</option>
                            <option value="Adv Comp: Program Apps (1/2)">Adv Comp: Program Apps (1/2)</option>
                            <option value="Adv Comp: App Math + AI (1/2)">Adv Comp: App Math + AI (1/2)</option>
                            <option value="Comp Prog: App Engin + Des (1/2)">Comp Prog: App Engin + Des (1/2)</option>
                            
                            <option disabled>Modern Language</option>
                            <option value="Chinese 1">Chinese 1</option>
                            <option value="Chinese 1p (Prior Study)">Chinese 1p (Prior Study)</option>
                            <option value="Chinese 2">Chinese 2</option>
                            <option value="Chinese 2 (Honors)">Chinese 2 (Honors)</option>
                            <option value="Chinese 3 (Honors)">Chinese 3 (Honors)</option>
                            <option value="Chinese 4">Chinese 4</option>
                            <option value="Chinese 5">Chinese 5</option>
                            <option value="Chinese 5 (Honors)">Chinese 5 (Honors)</option>
                            <option value="Advanced Topics Chinese (1/2)">Advanced Topics Chinese (1/2)</option>
                            <option value="Chinese Literature">Chinese Literature</option>
                            <option value="French 1">French 1</option>
                            <option value="French 1P (Prior Study)">French 1P (Prior Study)</option>
                            <option value="French 2">French 2</option>
                            <option value="French 2 (Honors)">French 2 (Honors)</option>
                            <option value="French 3">French 3</option>
                            <option value="French 3 (Honors)">French 3 (Honors)</option>
                            <option value="French 4: Culture + Literature">French 4: Culture + Literature</option>
                            <option value="French 4 (Honors)">French 4 (Honors)</option>
                            <option value="French 5: Francophone (Sem 1)">French 5: Francophone (Sem 1)</option>
                            <option value="French 5 (H): Exploration of Lit">French 5 (H): Exploration of Lit</option>
                            <option value="French 5: Film + Soc (Sem 2)">French 5: Film + Soc (Sem 2)</option>
                            <option value="French 6: Adv Studies (1/2)">French 6: Adv Studies (1/2)</option>
                            <option value="Spanish 1">Spanish 1</option>
                            <option value="Spanish 1P (Prior Study)">Spanish 1P (Prior Study)</option>
                            <option value="Spanish 2">Spanish 2</option>
                            <option value="Spanish 2/3 (Accelerated)">Spanish 2/3 (Accelerated)</option>
                            <option value="Spanish 2 (Honors)">Spanish 2 (Honors)</option>
                            <option value="Spanish 3">Spanish 3</option>
                            <option value="Spanish 3 (Honors)">Spanish 3 (Honors)</option>
                            <option value="Spanish 4: Culture + Lit">Spanish 4: Culture + Lit</option>
                            <option value="Spanish 4 (Honors)">Spanish 4 (Honors)</option>
                            <option value="Spanish 5: Latin Amer (Sem 1)">Spanish 5: Latin Amer (Sem 1)</option>
                            <option value="Spanish 5 (Honors)">Spanish 5 (Honors)</option>
                            <option value="Spanish 5: El Caribe (Sem 2)">Spanish 5: El Caribe (Sem 2)</option>
                            <option value="Advanced Topics Spanish (1/2)">Advanced Topics Spanish (1/2)</option>

                            <option disabled>History / Social Science</option>
                            <option value="Ancient Civilizations">Ancient Civilizations</option>
                            <option value="Modern World History: Class IV">Modern World History: Class IV</option>
                            <option value="Modern World History">Modern World History</option>
                            <option value="U.S. History: Class III">U.S. History: Class III</option>
                            <option value="The U.S. in the Modern World 1">The U.S. in the Modern World 1</option>
                            <option value="The U.S. in the Modern World 2">The U.S. in the Modern World 2</option>
                            <option value="Adv Hist: Af-Amer Hist (Sem 1)">Adv Hist: Af-Amer Hist (Sem 1)</option>
                            <option value="Amer Gov't + Politics (Sem 1)">Amer Gov't + Politics (Sem 1)</option>
                            <option value="Adv Hist: Asian Amer (Sem 2)">Adv Hist: Asian Amer (Sem 2)</option>
                            <option value="Adv Hist: Aztecs-High Tech (Sem 2)">Adv Hist: Aztecs-High Tech (Sem 2)</option>
                            <option value="Behavioral Economics (Sem 2)">Behavioral Economics (Sem 2)</option>
                            <option value="Comparative Gov't (Sem 2)">Comparative Gov't (Sem 2)</option>
                            <option value="Adv Hist: Civil Rights (Sem 2)">Adv Hist: Civil Rights (Sem 2)</option>
                            <option value="Global Economics (Sem 2)">Global Economics (Sem 2)</option>
                            <option value="Adv Hist: Global + Islam (Sem 2)">Adv Hist: Global + Islam (Sem 2)</option>
                            <option value="Activism Justice Dig World (1/2)">Activism Justice Dig World (1/2)</option>
                            <option value="Macroeconomics (Sem 1)">Macroeconomics (Sem 1)</option>
                            <option value="Macroeconomics (Sem 2)">Macroeconomics (Sem 2)</option>
                            <option value="Adv Hist: Modern China (Sem 1)">Adv Hist: Modern China (Sem 1)</option>
                            <option value="Adv Hist: Hist Mid East (Sem 1)">Adv Hist: Hist Mid East (Sem 1)</option>
                            <option value="Microeconomics (Sem 1)">Microeconomics (Sem 1)</option>
                            <option value="Microeconomics (Sem 2)">Microeconomics (Sem 2)</option>
                            <option value="Topics in Psychology (1/2)">Topics in Psychology (1/2)</option>
                            <option value="Religions of Asia (Sem 2)">Religions of Asia (Sem 2)</option>
                            <option value="Religions Middle East (Sem 1)">Religions Middle East (Sem 1)</option>
                            <option value="Psychology Seminar">Psychology Seminar</option>

                            <option disabled>Mathamatics</option>
                            <option value="Algebra 1 + Geometry">Algebra 1 + Geometry</option>
                            <option value="Proof + Problem Solving">Proof + Problem Solving</option>
                            <option value="Algebraic Concepts + Data Sci. (Honors)">Algebraic Concepts + Data Sci. (Honors)</option>
                            <option value="Algebraic Concepts + Data Science">Algebraic Concepts + Data Science</option>
                            <option value="Advanced Functions (Honors)">Advanced Functions (Honors)</option>
                            <option value="Advanced Functions w/Comp Science (Honors)">Advanced Functions w/Comp Science (Honors)</option>
                            <option value="Advanced Functions">Advanced Functions</option>
                            <option value="Adv. Statistical Method (Honors)">Adv. Statistical Method (Honors)</option>
                            <option value="Abstract Algebra + Group Theory">Abstract Algebra + Group Theory</option>
                            <option value="Multivariable Calculus">Multivariable Calculus</option>
                            <option value="Math + Social Justice (Sem 2)">Math + Social Justice (Sem 2)</option>
                            <option value="Statistics (Honors)">Statistics (Honors)</option>
                            <option value="Statistics">Statistics</option>
                            <option value="Calc + Applied Econ (Honors)">Calc + Applied Econ (Honors)</option>
                            <option value="Calculus (Honors)">Calculus (Honors)</option>
                            <option value="Calculus">Calculus</option>
                            <option value="Calculus (Accelerated)">Calculus (Accelerated)</option>
                            <option value="Adv Calculus + Stats (Honors)">Adv Calculus + Stats (Honors)</option>

                            <option disabled>Science</option>
                            <option value="Advanced Biology">Advanced Biology</option>
                            <option value="Advanced Chemistry">Advanced Chemistry</option>
                            <option value="Advanced Environmental Science">Advanced Environmental Science</option>
                            <option value="Advanced Physics">Advanced Physics</option>
                            <option value="Biology">Biology</option>
                            <option value="Biology (Honors)">Biology (Honors)</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Chemistry (Honors)">Chemistry (Honors)</option>
                            <option value="Neuroscience">Neuroscience</option>
                            <option value="Physics: Class IV">Physics: Class IV</option>
                            <option value="Physics">Physics</option>
                            <option value="Anatomy + Physiology (Sem 1)">Anatomy + Physiology (Sem 1)</option>
                            <option value="Anatomy + Physiology (Sem 2)">Anatomy + Physiology (Sem 2)</option>
                            <option value="Observational Astronomy (Sem 1)">Observational Astronomy (Sem 1)</option>
                            <option value="Issues in Enviro Science (Sem 1)">Issues in Enviro Science (Sem 1)</option>
                            <option value="Issues in Enviro Science (Sem 2)">Issues in Enviro Science (Sem 2)</option>
                            <option value="Geology (1/2)">Geology (1/2)</option>
                            <option value="Science in the Modern Age (1/2)">Science in the Modern Age (1/2)</option>
                            <option value="Marine Science (Sem 1)">Marine Science (Sem 1)</option>
                            <option value="Marine Science (Sem 2)">Marine Science (Sem 2)</option>
                            <option value="Molecular Genetics 1 (Sem 1)">Molecular Genetics 1 (Sem 1)</option>
                            <option value="Molecular Genetics 2 (Sem 2)">Molecular Genetics 2 (Sem 2)</option>
                            <option value="Organic Chemistry 1 (Sem 1)">Organic Chemistry 1 (Sem 1)</option>
                            <option value="Organic Chemistry 2 (Sem 2)">Organic Chemistry 2 (Sem 2)</option>
                        </select>
                    </div>

                    <div class="dropdown">
                        <select onclick="myFunction()" class="dropbtn" onChange={(e)=> setFree(e.target.value)}>
                            <option selected disabled>Choose Your Frees</option>
                            <option value="free1">Intensive Classical Greek</option>
                            <option value="free2">Adv Greek: Plato</option>
                            <option value="free3">Latin 2/3 (Accelerated)</option>
                        </select>
                        <input placeholder="Add Your Teacher's Email" className="txt-Box2"  value={email1} onChange={(e)=> setEmail1(e.target.value)}/>
                    </div>

                
                    
                    <div><input type="submit" className="conf-button" ></input></div>
                    </form>
                    
                    </div>

                    </div>
             
                    <div class="column">
                    <div className="profComp">
                    <p>Add a subject to tutor</p>
                    <form id="subject-form" onSubmit={ onSubmit2 }>
                    <div class="dropdown">
                    <select onclick="myFunction()" class="dropbtn" onChange={(e)=> setClass2(e.target.value)}>
                        
                        <option selected disabled className="dropbtn-Title">Select a course</option>
                        <option disabled>Classics</option>
                        <option value="Intensive Classical Greek">Intensive Classical Greek</option>
                        <option value="Adv Greek: Plato">Adv Greek: Plato</option>
                        <option value="Latin 2/3 (Accelerated">Latin 2/3 (Accelerated)</option>
                        <option value="Adv Latin: Rom Elegy + Lyr (1/2)">Adv Latin: Rom Elegy + Lyr (1/2)</option>
                        <option value="Latin Literature (AP)">Latin Literature (AP)</option>
                        <option value="Adv Latin: Roman Philosophy (Sem 1)">Adv Latin: Roman Philosophy (Sem 1)</option>
                        <option value="Adv Latin: Selected Read (Sem 2)">Adv Latin: Selected Read (Sem 2)</option>
                        <option value="Latin 1">Latin 1</option>
                        <option value="Latin 2">Latin 2</option>
                        <option value="Latin 3">Latin 3</option>
                        <option value="Latin 4: Lit of the Golden Age">Latin 4: Lit of the Golden Age</option>
                        
                        <option disabled>Computer Programming</option>
                        <option value="Computer Programming 1 (1/2)">Computer Programming 1 (1/2)</option>
                        <option value="Comp Prog 2/3: Prog + Apps">Comp Prog 2/3: Prog + Apps</option>
                        <option value="Computer Programming 2 (1/2)">Computer Programming 2 (1/2)</option>
                        <option value="Adv Comp: Program Apps (1/2)">Adv Comp: Program Apps (1/2)</option>
                        <option value="Adv Comp: App Math + AI (1/2)">Adv Comp: App Math + AI (1/2)</option>
                        <option value="Comp Prog: App Engin + Des (1/2)">Comp Prog: App Engin + Des (1/2)</option>
                        
                        <option disabled>Modern Language</option>
                        <option value="Chinese 1">Chinese 1</option>
                        <option value="Chinese 1p (Prior Study)">Chinese 1p (Prior Study)</option>
                        <option value="Chinese 2">Chinese 2</option>
                        <option value="Chinese 2 (Honors)">Chinese 2 (Honors)</option>
                        <option value="Chinese 3 (Honors)">Chinese 3 (Honors)</option>
                        <option value="Chinese 4">Chinese 4</option>
                        <option value="Chinese 5">Chinese 5</option>
                        <option value="Chinese 5 (Honors)">Chinese 5 (Honors)</option>
                        <option value="Advanced Topics Chinese (1/2)">Advanced Topics Chinese (1/2)</option>
                        <option value="Chinese Literature">Chinese Literature</option>
                        <option value="French 1">French 1</option>
                        <option value="French 1P (Prior Study)">French 1P (Prior Study)</option>
                        <option value="French 2">French 2</option>
                        <option value="French 2 (Honors)">French 2 (Honors)</option>
                        <option value="French 3">French 3</option>
                        <option value="French 3 (Honors)">French 3 (Honors)</option>
                        <option value="French 4: Culture + Literature">French 4: Culture + Literature</option>
                        <option value="French 4 (Honors)">French 4 (Honors)</option>
                        <option value="French 5: Francophone (Sem 1)">French 5: Francophone (Sem 1)</option>
                        <option value="French 5 (H): Exploration of Lit">French 5 (H): Exploration of Lit</option>
                        <option value="French 5: Film + Soc (Sem 2)">French 5: Film + Soc (Sem 2)</option>
                        <option value="French 6: Adv Studies (1/2)">French 6: Adv Studies (1/2)</option>
                        <option value="Spanish 1">Spanish 1</option>
                        <option value="Spanish 1P (Prior Study)">Spanish 1P (Prior Study)</option>
                        <option value="Spanish 2">Spanish 2</option>
                        <option value="Spanish 2/3 (Accelerated)">Spanish 2/3 (Accelerated)</option>
                        <option value="Spanish 2 (Honors)">Spanish 2 (Honors)</option>
                        <option value="Spanish 3">Spanish 3</option>
                        <option value="Spanish 3 (Honors)">Spanish 3 (Honors)</option>
                        <option value="Spanish 4: Culture + Lit">Spanish 4: Culture + Lit</option>
                        <option value="Spanish 4 (Honors)">Spanish 4 (Honors)</option>
                        <option value="Spanish 5: Latin Amer (Sem 1)">Spanish 5: Latin Amer (Sem 1)</option>
                        <option value="Spanish 5 (Honors)">Spanish 5 (Honors)</option>
                        <option value="Spanish 5: El Caribe (Sem 2)">Spanish 5: El Caribe (Sem 2)</option>
                        <option value="Advanced Topics Spanish (1/2)">Advanced Topics Spanish (1/2)</option>

                        <option disabled>History / Social Science</option>
                        <option value="Ancient Civilizations">Ancient Civilizations</option>
                        <option value="Modern World History: Class IV">Modern World History: Class IV</option>
                        <option value="Modern World History">Modern World History</option>
                        <option value="U.S. History: Class III">U.S. History: Class III</option>
                        <option value="The U.S. in the Modern World 1">The U.S. in the Modern World 1</option>
                        <option value="The U.S. in the Modern World 2">The U.S. in the Modern World 2</option>
                        <option value="Adv Hist: Af-Amer Hist (Sem 1)">Adv Hist: Af-Amer Hist (Sem 1)</option>
                        <option value="Amer Gov't + Politics (Sem 1)">Amer Gov't + Politics (Sem 1)</option>
                        <option value="Adv Hist: Asian Amer (Sem 2)">Adv Hist: Asian Amer (Sem 2)</option>
                        <option value="Adv Hist: Aztecs-High Tech (Sem 2)">Adv Hist: Aztecs-High Tech (Sem 2)</option>
                        <option value="Behavioral Economics (Sem 2)">Behavioral Economics (Sem 2)</option>
                        <option value="Comparative Gov't (Sem 2)">Comparative Gov't (Sem 2)</option>
                        <option value="Adv Hist: Civil Rights (Sem 2)">Adv Hist: Civil Rights (Sem 2)</option>
                        <option value="Global Economics (Sem 2)">Global Economics (Sem 2)</option>
                        <option value="Adv Hist: Global + Islam (Sem 2)">Adv Hist: Global + Islam (Sem 2)</option>
                        <option value="Activism Justice Dig World (1/2)">Activism Justice Dig World (1/2)</option>
                        <option value="Macroeconomics (Sem 1)">Macroeconomics (Sem 1)</option>
                        <option value="Macroeconomics (Sem 2)">Macroeconomics (Sem 2)</option>
                        <option value="Adv Hist: Modern China (Sem 1)">Adv Hist: Modern China (Sem 1)</option>
                        <option value="Adv Hist: Hist Mid East (Sem 1)">Adv Hist: Hist Mid East (Sem 1)</option>
                        <option value="Microeconomics (Sem 1)">Microeconomics (Sem 1)</option>
                        <option value="Microeconomics (Sem 2)">Microeconomics (Sem 2)</option>
                        <option value="Topics in Psychology (1/2)">Topics in Psychology (1/2)</option>
                        <option value="Religions of Asia (Sem 2)">Religions of Asia (Sem 2)</option>
                        <option value="Religions Middle East (Sem 1)">Religions Middle East (Sem 1)</option>
                        <option value="Psychology Seminar">Psychology Seminar</option>

                        <option disabled>Mathamatics</option>
                        <option value="Algebra 1 + Geometry">Algebra 1 + Geometry</option>
                        <option value="Proof + Problem Solving">Proof + Problem Solving</option>
                        <option value="Algebraic Concepts + Data Sci. (Honors)">Algebraic Concepts + Data Sci. (Honors)</option>
                        <option value="Algebraic Concepts + Data Science">Algebraic Concepts + Data Science</option>
                        <option value="Advanced Functions (Honors)">Advanced Functions (Honors)</option>
                        <option value="Advanced Functions w/Comp Science (Honors)">Advanced Functions w/Comp Science (Honors)</option>
                        <option value="Advanced Functions">Advanced Functions</option>
                        <option value="Adv. Statistical Method (Honors)">Adv. Statistical Method (Honors)</option>
                        <option value="Abstract Algebra + Group Theory">Abstract Algebra + Group Theory</option>
                        <option value="Multivariable Calculus">Multivariable Calculus</option>
                        <option value="Math + Social Justice (Sem 2)">Math + Social Justice (Sem 2)</option>
                        <option value="Statistics (Honors)">Statistics (Honors)</option>
                        <option value="Statistics">Statistics</option>
                        <option value="Calc + Applied Econ (Honors)">Calc + Applied Econ (Honors)</option>
                        <option value="Calculus (Honors)">Calculus (Honors)</option>
                        <option value="Calculus">Calculus</option>
                        <option value="Calculus (Accelerated)">Calculus (Accelerated)</option>
                        <option value="Adv Calculus + Stats (Honors)">Adv Calculus + Stats (Honors)</option>

                        <option disabled>Science</option>
                        <option value="Advanced Biology">Advanced Biology</option>
                        <option value="Advanced Chemistry">Advanced Chemistry</option>
                        <option value="Advanced Environmental Science">Advanced Environmental Science</option>
                        <option value="Advanced Physics">Advanced Physics</option>
                        <option value="Biology">Biology</option>
                        <option value="Biology (Honors)">Biology (Honors)</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Chemistry (Honors)">Chemistry (Honors)</option>
                        <option value="Neuroscience">Neuroscience</option>
                        <option value="Physics: Class IV">Physics: Class IV</option>
                        <option value="Physics">Physics</option>
                        <option value="Anatomy + Physiology (Sem 1)">Anatomy + Physiology (Sem 1)</option>
                        <option value="Anatomy + Physiology (Sem 2)">Anatomy + Physiology (Sem 2)</option>
                        <option value="Observational Astronomy (Sem 1)">Observational Astronomy (Sem 1)</option>
                        <option value="Issues in Enviro Science (Sem 1)">Issues in Enviro Science (Sem 1)</option>
                        <option value="Issues in Enviro Science (Sem 2)">Issues in Enviro Science (Sem 2)</option>
                        <option value="Geology (1/2)">Geology (1/2)</option>
                        <option value="Science in the Modern Age (1/2)">Science in the Modern Age (1/2)</option>
                        <option value="Marine Science (Sem 1)">Marine Science (Sem 1)</option>
                        <option value="Marine Science (Sem 2)">Marine Science (Sem 2)</option>
                        <option value="Molecular Genetics 1 (Sem 1)">Molecular Genetics 1 (Sem 1)</option>
                        <option value="Molecular Genetics 2 (Sem 2)">Molecular Genetics 2 (Sem 2)</option>
                        <option value="Organic Chemistry 1 (Sem 1)">Organic Chemistry 1 (Sem 1)</option>
                        <option value="Organic Chemistry 2 (Sem 2)">Organic Chemistry 2 (Sem 2)</option>
                    </select>
                    </div>

                    <div class="dropdown">
                    </div>
                    <p></p>
                    <input placeholder="Enter Teacher's Email For Approval" className="txt-Box2" value={email2} onChange={(e)=> setEmail2(e.target.value)}/>
                    <div class="custom-pad"><input type="submit" className="conf-button"></input></div>
                    </form>
                    </div>
                    
                    </div>
                    
                </div>

                <TutorsModal isOpen={modalOpen} onClose={() => setModalOpen(false)}/>

                    
            </div>
           
        );
    }
export default TutorRequest;