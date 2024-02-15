/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import styled from "styled-components/macro";
import * as Dialog from "@radix-ui/react-dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Overlay = styled(Dialog.Overlay)`
   position: fixed;
   top: 0;
   left: 0;
   height: 100%;
   width: 20%;
   background: var(--modal-overlay-background);
   z-index: 1;
`;

const Content = styled(Dialog.Content)`
   position: fixed;
   top: 0;
   left: 20%;
   height: 100%;
   width: 80%;
   background-color: var(--color-white);
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

const Close = styled(Dialog.Close)`
   position: absolute;
   top: 0;
   right: 0;
   display: flex;
   justify-content: flex-end;
   padding: 26px 16px;
   outline: none;
`;

const Nav = styled.nav`
   display: flex;
   flex-direction: column;
   gap: 22px;
   padding-left: 32px;

   & a {
      text-decoration: none;
      text-transform: uppercase;
      color: var(--color-gray-900);
      font-size: 112%;

      &:hover {
         text-decoration: underline;
      }

      &:first-of-type {
         color: var(--color-secondary);
      }
   }
`;

const Footer = styled.footer`
   position: absolute;
   bottom: 0;
   left: 0;
   padding: 32px 32px;
   display: flex;
   flex-direction: column;
   gap: 14px;

   & a {
      text-decoration: none;
      color: var(--color-gray-700);
      font-size: 90%;

      &:hover {
         text-decoration: underline;
      }
   }
`;

const MobileMenu = ({ isOpen, onDismiss }) => {
   const triggerRef = useRef(null);

   // Trigger the opening of the modal. With the Radix Dialog
   // nothing happens without this trigger.
   useEffect(() => {
      isOpen && triggerRef.current.click();
   });

   return (
      <Dialog.Root>
         <Dialog.Trigger asChild>
            <UnstyledButton ref={triggerRef} />
         </Dialog.Trigger>
         <Dialog.Portal>
            <Overlay />
            <Content>
               <Close asChild>
                  <UnstyledButton onClick={onDismiss} aria-label="Close">
                     <Icon id={"close"} size={24} />
                     <VisuallyHidden>Dismiss Menu</VisuallyHidden>
                  </UnstyledButton>
               </Close>
               <Nav>
                  <a href="/sale">Sale</a>
                  <a href="/new">New&nbsp;Releases</a>
                  <a href="/men">Men</a>
                  <a href="/women">Women</a>
                  <a href="/kids">Kids</a>
                  <a href="/collections">Collections</a>
               </Nav>
               <Footer>
                  <a href="/terms">Terms and Conditions</a>
                  <a href="/privacy">Privacy Policy</a>
                  <a href="/contact">Contact Us</a>
               </Footer>
            </Content>
         </Dialog.Portal>
      </Dialog.Root>
   );
};

export default MobileMenu;
