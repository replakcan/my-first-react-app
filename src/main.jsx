import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ClassInput from "./class-components/ClassInput.jsx";
import FunctionalInput from "./class-components/FunctionalInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClassInput name={"Class Input"} />
    <FunctionalInput name={"Functional Input"} />
  </StrictMode>
);
