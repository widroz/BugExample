import CutSizesChart from "./components/CutSizesChart";
import { useState } from "react";
import './App.css'
import Bootstrap from "./components/Bootstrap";
import InputField from "./components/InputField";

const App = () => {

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(20);
  const[selector, setSelector] = useState(1);

  return (
    <div>
      <Bootstrap/>
      <div className="inputs-div">
      <InputField title="Min:" inputValue={min} setInputValue={setMin}></InputField>
      <InputField title="Max:" inputValue={max} setInputValue={setMax}></InputField>
      <InputField title="Selector:" inputValue={selector} setInputValue={setSelector}></InputField>
      </div>
      <CutSizesChart min={min} max={max} selector={selector}></CutSizesChart>

    </div>
  );
};

export default App;