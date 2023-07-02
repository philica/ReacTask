const Button = ({functions,color,onClick}) => {
  return <button onClick={onClick} className="col button button-fill">{functions}</button>;
};

export default Button;