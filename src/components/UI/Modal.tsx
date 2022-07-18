import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./styles/Modal.module.css";


const Backdrop = (props: {onClick: () => void}) => {
  return <div className={classes.backdrop} />;
};
const ModalOverlay = (props: { children: React.ReactNode}) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = ( props: {children: ReactNode, onBackdropClick: () => void}) => {
  const portal = document.getElementById("overlays") as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onBackdropClick}/>, portal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </>
  );
};

export default Modal;
