import React from 'react';
import {Link, NavLink} from "react-router-dom";

const SignedinLinks = ()=>{

    return(

        <ul className="right">
            <li> <NavLink to="/create"> New Project </NavLink> </li>
            <li> <NavLink to="/"> Log Out </NavLink> </li>
            <li> <NavLink to="/" className="btn btn-floating pink lighten-1"> HG </NavLink> </li>
        
        </ul>
    )
}


export default SignedinLinks;