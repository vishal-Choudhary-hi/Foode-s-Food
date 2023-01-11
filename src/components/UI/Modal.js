import ReactDOM from "react-dom";

import Classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={Classes.backdrop} onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={Classes.modal}>
      <div className={Classes.content}>{props.children}</div>
    </div>
  );
};
const helper = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, helper)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        helper
      )}
    </>
  );
};
export default Modal;
