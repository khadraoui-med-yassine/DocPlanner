import React from 'react';
import {objet1} from './data';
import Imggreen from './img/img-green.png';
import Imgblue from './img/img-blue.png';



// const Comptwosectionthree =(props)=>
//     {    
//         // style={{backgroundColor: "#00b39b"}}
//         return <div className="component-2" >
//                     <div className="for-x">{props.forx}</div>
//                     <div className="white-paragraphe">{props.paragraphe}</div>                              
//                     <div className="select-img">    
//                     {props.country}
//                     <img className="img-green" src={props.image}  />    
//                     </div>

//                </div>
//     }


// const Sectionthree =()=>
//     {
//     //    let  objet1={
//     //                 forx:"for patients",
//     //                 paragraphe:"Find a doctor, book a visit and solve any health-related doubt",
//     //                 image:{Imggreen},
//     //                 country:<select className="style-select">
//     //                             <option>Argentine</option>
//     //                             <option>Argentine</option>
//     //                             <option>Argentine</option>
//     //                             <option>Argentine</option>
//     //                         </select>
//     //             };
//         let objet2={
//             forx:"For Doctors ",
//             paragraphe:"Save time managing visits and cut no-shows by half",
//             image:{Imggreen},
//                    };        
           
//         return <div className="section-three">
//                     <Comptwosectionthree data={objet1}/>

//                     <Comptwosectionthree forx={objet2.forx}  paragraphe={objet2.paragraphe}  image={Imgblue}/>
//               </div>        

//     }
   

const Sectionthree=({arr})=>{
return(
    <div className="section-three">
        {arr.map(e=><div className={e.style}>
                            <div className="for-x">{e.forx}</div>
                            <div className="white-paragraphe">{e.paragraphe}</div> 
                            <div className="select-img">    
                            {e.country && <select>{e.country.map( (el,i) => <option key={i}> {el} </option>)}</select>}
                            <img className="img-green" src={e.image}  />    
                     </div>
                    </div>
        )}
    </div>
)
}

export default Sectionthree;    
