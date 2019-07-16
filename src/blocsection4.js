import React from 'react';



const Bloc =(props)=>
    {
        return <div className="bloc-s4" style={props.top && props.top}>
                    <img src={props.img} style={{width:"15%",height:"20%",margin:"40px 0px"}} />
                    <div className="paragraphe1-bloc-s4" style={{height:"30%"}}>{props.p1}</div>
                    <div className="paragraphe-bloc-s4">{props.p2}</div>
               </div>
    }

export default  Bloc;  