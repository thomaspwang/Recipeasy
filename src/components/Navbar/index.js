import React from "react";
import { Nav, NavLink, NavMenu }
  from "./NavbarElements";


import {currUserAtom} from "../../atoms.js";
import {useAtom} from 'jotai';

const Navbar = () => {

  const [user] = useAtom(currUserAtom);

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
        <div style={{ float: "right", paddingTop: "10px" }}>Hello {user}!</div>
      </Nav>
    </>
  );
};

export default Navbar;
