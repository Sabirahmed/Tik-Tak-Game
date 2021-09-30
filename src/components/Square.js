import React from "react";

const Square = (props) => {
  const classes = props.className ? `${props.className} square` : `square`;
  return (
    <span
      className={classes + ` fc-black`}
      onClick={() => props.onClick(props.index)}
    >
      {props.state}
    </span>
  );
};
export default Square;
