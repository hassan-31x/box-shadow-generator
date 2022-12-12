import './App.css';
import { useState } from 'react';

function App() {
  const [xaxis, setXaxis] = useState(0)
  const [yaxis, setYaxis] = useState(0)
  const [blur, setBlur] = useState(0)
  const [color, setColor] = useState("black")

  const text = `boxShadow: ${xaxis}px ${yaxis}px ${blur}px ${color};`
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert(`(${text}) copied!`);
  }

  return (
    <div className='App'>

      <div className="inputs">
        <label>Horizontal<br/>
          <input type="range" min='-100' max="100" value={xaxis} onChange={(e) => {setXaxis(e.target.value)}}/>
        </label><br/>
        <label>Vertical<br/>
          <input type="range" min='-100' max="100" value={yaxis} onChange={(e) => {setYaxis(e.target.value)}}/>
        </label><br/>
        <label>Blur<br/>
          <input type="range" min='0' max="100" value={blur} onChange={(e) => {setBlur(e.target.value)}}/>
        </label><br/>
        <label>Shadow Color<br/>
          <input type="color" value={color} onChange={(e) => {setColor(e.target.value)}}/>
        </label>
      </div>

      <div className="box" style={{boxShadow: `${xaxis}px ${yaxis}px ${blur}px ${color}`}}>
        <p onClick={copy}>Copy!</p>
      </div>
    </div>
  );
}
export default App;
