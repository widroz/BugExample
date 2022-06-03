import CutSizesChart from "./components/CutSizesChart";
import MaxInput from "./components/MaxInput";
import MinInput from "./components/MinInput";
import { useState } from "react";
import SelectorInput from "./components/SelectorInput";


const App = () => {

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(20);
  const[selector, setSelector] = useState(1);

  return (
    <div>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around',alignItems:'center', margin:'2rem'}}>
      <MinInput min={min} setMin={setMin}></MinInput>
      <MaxInput max={max} setMax={setMax}></MaxInput>
      <SelectorInput selector={selector} setSelector={setSelector}></SelectorInput>
      </div>
      <CutSizesChart min={min} max={max} selector={selector}></CutSizesChart>
    </div>
  );
};

export default App;