import React from 'react';




const Navigmenu = (props) => {
    return <div>
        <ul className="ul-navbar">
            {props.data.map((el, i) => <li key={i} className="menu" ><a href="\" class="a-navbar" >{el.name}</a>{el.sousnav && <ul className=" dropdown"> {el.sousnav.map((e, i) => <li key={i}><a href="\" className="a-dropdown">{e}</a></li>)} </ul>}</li>)}
        </ul>
    </div>

}
export default Navigmenu;

