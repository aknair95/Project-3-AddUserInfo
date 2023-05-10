import Card from "./card";
import "./ErrorModal.css";
import ReactDom from "react-dom";
import { Fragment } from "react";

const Backdrop=(props) =>{
  return <div className="backdrop" onClick={props.onConfirm}/>;
}

const Overlay=(props) =>{
  return (
    <Card classname="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <body className="content">
          <p>{props.message}</p>
        </body>
        <footer className="actions">
          <button type="button" onClick={props.onConfirm}>Okay</button>
        </footer>
      </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById("backdrop-root"))}
      {ReactDom.createPortal(<Overlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById("backdrop-root"))}
    </Fragment>
  );
};

export default ErrorModal;
