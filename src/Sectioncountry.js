import React from 'react';
import {Country} from './data';


const Box_country=({bled})=>
    {
        return <div className="box-country">
                    <img src={bled.img} alt="chfama zeda" className="img-country" />
                    <div className="countryandbtn">
                        <div className="country">{bled.paye}</div>
                        <button className="btn-country">See openings</button>
                    </div>
               </div>
    }



const Sectioncountry =()=>
    {
        return <div className="div-box-country">
                   {Country.map((el,i)=>                                  
                   <Box_country bled={el} /> )                            
                   }        
               </div>
    }
  
export default Sectioncountry;    