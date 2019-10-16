import React from "react";

import "./Modal.css";

/* Modal and Backdrop component used upon clicking a table row
   The modal is a popup window which displays extra information when clicking a table record
*/
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
