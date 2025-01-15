import { useContext } from "react";
import { ValueContext } from "../contexts/ValueContext";

export function CountCard() {
  const { value } = useContext(ValueContext);

  return (
    <>
      <p>Count: {value}</p>
    </>
  );
}
