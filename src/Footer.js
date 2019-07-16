import React from 'react';
import {paye} from './data';



const Footer =()=>{
    return <div className="footer">
                <p className="paragraphe">We are leaders in 10 countries:{ paye.map((el,i) => (i<paye.length-1) ? <span><a  className="lien-footer" href='\'>{el}</a> ,</span>   :<a href='\' className="lien-footer">{el}</a> )}</p>
                <p className="paragraphe">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
                <p className="paragraphe">www.docplanner.com © 2019</p>
           </div>
}

export default Footer;