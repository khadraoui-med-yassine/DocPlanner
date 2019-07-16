import React from 'react';

const Componesectionone =(props)=>
    {   return <div className="paragraphe-s2" >{props.paragraphe}</div>
    }

const Sectiontwo =()=>
    {
        return <div className="section-two">                        
                    <Componesectionone paragraphe="We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere." />
                    <Componesectionone paragraphe="We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients." />
               </div>
    }
 
export default Sectiontwo;    