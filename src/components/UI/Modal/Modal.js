import React from "react";

import "./Modal.css";

//Modal and Backdrop component used upon clicking a table row
const Modal = props => {
  return (
    <>
      <div className="backdrop" onClick={props.closeModal} />
      <div className="modal" onClick={props.closeModal}>
        {props.children}
      </div>
    </>
  );
};

export default Modal;
