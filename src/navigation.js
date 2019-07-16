import React from 'react';
import Logo from './img/logo.png';
import Navigmenu from './navmenu';



const Navigationbar =({menu})=>
        {
            return(
                    <div className="navbar">
                        <div className="flex-logo">
                            <img src={Logo} className="logo"/>
                        </div> 
                        <Navigmenu data={menu}/>
                    </div>
            )
        }
export default  Navigationbar ;       