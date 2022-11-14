import "./button.css";

function Button(props) {

  return (
    <button className="btn" onClick={props.onClick} >
      {props.children}
    </button>
  );
}

export default Button;
