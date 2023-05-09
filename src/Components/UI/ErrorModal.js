import Card from "./card";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onConfirm}/>
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
    </React.Fragment>
  );
};

export default ErrorModal;
