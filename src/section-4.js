import React from 'react';
import Logo from './img/logo-doc.png';
import Bloc from './blocsection4';
import Leader from './img/leader.png';
import Doctors from './img/doctors.png';
import Patients from './img/patients.png';
import Visits from './img/visits.png';

const Sectionfourone =()=>
    {
        return <div className="section-4-1">
                    <div className="green-paragraphe paragraphe-s4">The world's <br /> biggest healthcare platform</div>
                    <div className="paragraphe-s2 paragraphe-sous-section-4">We work from 6 offices all over the world, bringing Docplanner <br /> Group to life in almost 20 countries.</div>
                    <img src={Logo} className="logo-s4" />    
               </div>
    }
const Sectionfourtwo =()=>
    {
        const top ={marginTop :'-17px'}
        return <div className="section-4-2">
                  <Bloc img={Leader} p1="Leader in 10 countries" p2="Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile" />
                  <Bloc img={Visits} top={top} p1="1.5 million appointments" p2="booked last month" />
                  <Bloc img={Patients} p1="30 million unique patients" p2="visit us every month" />
                  <Bloc img={Doctors} top={top} p1="2 million active doctors" p2="trust in our solutions" />

               </div>
    }    
const Sectionfour =()=>
    {
        return <div className="Section-4">
                        <Sectionfourone />
                        <Sectionfourtwo />

               </div>
    }

export default Sectionfour;
