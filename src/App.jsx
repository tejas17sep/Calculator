import styles from "./App.module.css";
import Display from "./component/Display";
import Buttonscontainor from "./Buttonscontainor";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <Buttonscontainor onButtonClick={onButtonClick}></Buttonscontainor>
      </div>
    </>
  );
}

export default App;
