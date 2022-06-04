import CutSizesChart from "./components/CutSizesChart";
import { useState } from "react";
import './App.css'
import Bootstrap from "./components/Bootstrap";
import Controls from "./components/Controls";

const App = () => {

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(20);
  const[selector, setSelector] = useState(1);

  return (
    <div>
      <Bootstrap/>
      <Controls min={min} max={max} selector={selector} setSelector={setSelector} setMin={setMin} setMax={setMax}/>
      <CutSizesChart min={min} max={max} selector={selector}></CutSizesChart>

    </div>
  );
};

export default App;