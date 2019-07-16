import React from 'react';

const Liensectionthree =(props)=>
    {
        return <a className="lien-section3" href="\">
                    {props.lien}
               </a>
    }

const Sectionthreetwo =()=>
    {
        return <div className="section-3-2">
                    <p className="partie-paragraphe green-paragraphe">
                             We are a global <br/>company <br /> with local culture
                    </p>
                    
                    <div className="lien-section-3-2">
                        <Liensectionthree lien="lien 1"/>
                        <Liensectionthree lien="lien 2"/>
                        <Liensectionthree lien="lien 1"/>
                        <Liensectionthree lien="lien 2"/>
                        <Liensectionthree lien="lien 1"/>
                        
                    </div>
              </div>
    }

    export default Sectionthreetwo;