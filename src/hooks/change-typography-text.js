import { useState } from "react";

const ChangeText = () => {
  const [enteredValue, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value: enteredValue,
    inputChangeHandler: handleChange,
  }
};

export default ChangeText;
