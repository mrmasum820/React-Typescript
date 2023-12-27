import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
};

/*
<Button
        handleClick={(event, id) => console.log("button clicked", event, id)}
      />
*/
