import { useState } from "react";

const Alper = () => {
  const [heading, setHeading] = useState("Our First Test");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
};

export default Alper;
