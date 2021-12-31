import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/main" activeStyle>
            Recipes
          </NavLink>
          <NavLink to="/saved" activeStyle>
            Saved
          </NavLink>
          <NavLink to="/login" activeStyle>
            Login/Sign up
          </NavLink>
        </NavMenu>
        <div style={{float:"right", paddingTop: "10px"}}>Hello [User] !</div>
      </Nav>
      </>
  );
};
  
export default Navbar;
