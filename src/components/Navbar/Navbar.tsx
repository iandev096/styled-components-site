import React, { ReactElement, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavItemBtn,
  NavBtnLink,
  NavLink,
  NavLogo,
  NavMenu,
} from "./Navbar.elements";
import { Button } from "../../global.styles";

interface Props {}

function Navbar(props: Props): ReactElement {
  const [showMobileNavList, setshowMobileNavList] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const showbutton = () => {
    if (window.innerWidth <= 960) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    showbutton();
  }, []);

  window.addEventListener("resize", showbutton);

  const toggleNavList = () => setshowMobileNavList(!showMobileNavList);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={toggleNavList}>
              {showMobileNavList ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu show={showMobileNavList} onClick={toggleNavList}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/products">Products</NavLink>
              </NavItem>
              <NavItemBtn>
                {isDesktop ? (
                  <NavBtnLink to="sign-up">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="sign-up">
                    <Button onClick={toggleNavList} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
