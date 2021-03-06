import React from "react";
import styled from 'styled-components';

const ModalDiv = styled.div`
  padding: 1rem;
  position: fixed;
  top: 10vh;
  left: 33%;
  width: 35rem;
  max-height: 80vh;
  background: white;
  border-radius: 5px;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
`;

const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;


/* Modal and Backdrop component used upon clicking a table row
   The modal is a popup window which displays extra information when clicking a table record
*/
const Modal = ({ children, closeModal }) => {
  return (
    <>
      <BackdropDiv onClick={closeModal} />
      <ModalDiv onClick={closeModal}>
        {children}
      </ModalDiv>
    </>
  );
};

export default Modal;
