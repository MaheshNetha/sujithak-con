import React from "react";
import { NavLink } from "react-router-dom";


const NavList = ()=>{

    let activeStyle = {
        textDecoration: "underline",
      };
    
      let activeClassName = "underline";
      return(
        <nav>
        <ul style={{fontSize:"14px"}}>
          <li>
            <NavLink
              to="/tns"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Tools/Supplies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rnm"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Repairs/Maintanance
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rns"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Repairs/Satisfaction
            </NavLink>
          </li>
          </ul>
          </nav>
        )

}

export default NavList;