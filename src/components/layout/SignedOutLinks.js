import React from 'react';
import {Link, NavLink} from "react-router-dom";

const SignedOutLinks = ()=>{

    return(

        <ul className="right">
            <li> <NavLink to="/signup"> Sign Up </NavLink> </li>
            <li> <NavLink to="/signin"> LogiN </NavLink> </li>
                   
        </ul>
    )
}


export default SignedOutLinks;