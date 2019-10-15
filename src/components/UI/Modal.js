import React from "react";

// import classes from "./Modal.css";

const modalStyles = {
  padding: "1rem",
  position: "fixed",
  top: "10vh",
  left: "30%",
  width: "40%",
  maxHeight: "80vh",
  background: "white",
  borderRadius: "5px",
  zIndex: "100",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
  overflow: "hidden"
};

const backdropStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.75)",
  zIndex: "10"
};

const Modal = props => {
  return (
    <>
      <div style={backdropStyles} onClick={props.closeModal} />
      <div style={modalStyles} onClick={props.closeModal}>
        {props.children}
      </div>
    </>
  );
};

export default Modal;
