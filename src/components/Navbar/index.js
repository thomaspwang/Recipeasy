import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/ingredients" activeStyle>
            Add Ingredients
          </NavLink>
          <NavLink to="/main" activeStyle>
            Recipes
          </NavLink>
          <NavLink to="/saved" activeStyle>
            Saved
          </NavLink>
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
        </NavMenu>
      </Nav>
      </>
  );
};
  
export default Navbar;
 