import React, { useEffect } from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";
import Icon from "../Icon";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";

import { BREAKPOINTS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton";

const { laptop, tablet, mobile } = BREAKPOINTS;

const Header = () => {
   const [showMobileMenu, setShowMobileMenu] = React.useState(false);

   // This is to reset the flag so there is always a state change when
   // it is set to true by clicking on the hamburger menu. Without this
   // effect there is no state change after the user exits the modal
   // by clicking the overlay or hitting escape, and the modal will
   // not display when using the Radix component.
   useEffect(() => {
      if (showMobileMenu === true) setShowMobileMenu(false);
   }, [showMobileMenu]);

   return (
      <header>
         <SuperHeader />
         <MainHeader>
            <LeftSide>
               <Logo />
            </LeftSide>
            <Nav>
               {/*<NavLink href="/sale">Sale</NavLink>
               <NavLink href="/new">New&nbsp;Releases</NavLink>
               <NavLink href="/men">Men</NavLink>
               <NavLink href="/women">Women</NavLink>
               <NavLink href="/kids">Kids</NavLink>
   <NavLink href="/collections">Collections</NavLink>*/}
               <NavLink href="/sale">A Vendre</NavLink>
               <NavLink href="/new">Nouvelles&nbsp;Versions</NavLink>
               <NavLink href="/men">Hommes</NavLink>
               <NavLink href="/women">Femmes</NavLink>
               <NavLink href="/kids">Enfants</NavLink>
               <NavLink href="/collections">Collections</NavLink>
            </Nav>
            <RightSide />
            <MobileSide>
               <UnstyledButton>
                  <Icon id={"shopping-bag"} size={24} />
                  <VisuallyHidden>Shopping bag</VisuallyHidden>
               </UnstyledButton>
               <UnstyledButton>
                  <Icon id={"search"} size={24} />
                  <VisuallyHidden>Search</VisuallyHidden>
               </UnstyledButton>
               <UnstyledButton>
                  <Icon
                     id={"menu"}
                     size={24}
                     onClick={() => setShowMobileMenu(true)}
                  />
                  <VisuallyHidden>Menu</VisuallyHidden>
               </UnstyledButton>
            </MobileSide>
         </MainHeader>

         <MobileMenu
            isOpen={showMobileMenu}
            onDismiss={() => setShowMobileMenu(false)}
         />
      </header>
   );
};

const MainHeader = styled.div`
   display: flex;
   align-items: baseline;
   padding: 18px 32px;
   height: auto;
   border-bottom: 1px solid var(--color-gray-300);
   overflow: auto;

   @media (max-width: ${laptop}) {
      & {
         /* This is so the right-side padding reduces to zero
         * between the two breakpoints to reduce jerkiness */
         padding-right: calc((100vw - 60rem) / 11);
      }
   }

   @media (max-width: ${tablet}) {
      & {
         align-items: center;
         padding-right: 2rem;
      }
   }
   @media (max-width: ${mobile}) {
      & {
         padding-left: 1rem;
         padding-right: 1rem;
      }
   }
`;

const Nav = styled.nav`
   display: flex;
   gap: clamp(1rem, 7vw - 3rem, 2.5rem);
   margin: 0px 48px;
   white-space: nowrap;

   @media (max-width: ${laptop}) {
      & {
         /* This is so the right-side margin reduces to zero
         * between the two breakpoints to reduce jerkiness */
         margin-right: calc((100vw - 60rem) * 3 / 22);
      }
   }

   @media (max-width: ${tablet}) {
      & {
         display: none;
      }
   }
`;

const LeftSide = styled.div`
   flex: 1;

   @media (max-width: ${tablet}) {
      flex: 0;
      margin-right: auto;
   }
`;

const RightSide = styled.div`
   flex: 1;

   @media (max-width: ${laptop}) {
      & {
         flex-shrink: 1;
      }
   }

   @media (max-width: ${tablet}) {
      & {
         display: none;
      }
   }
`;

const MobileSide = styled.div`
   display: none;

   @media (max-width: ${tablet}) {
      & {
         display: flex;
         justify-content: space-between;
         gap: 2rem;
      }
   }
   @media (max-width: ${mobile}) {
      & {
         gap: 1rem;
      }
   }
`;

const NavLink = styled.a`
   font-size: 1.125rem;
   text-transform: uppercase;
   text-decoration: none;
   color: var(--color-gray-900);
   font-weight: var(--weight-medium);

   &:first-of-type {
      color: var(--color-secondary);
   }
`;

export default Header;
