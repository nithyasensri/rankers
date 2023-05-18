

import React from 'react'
import { useState } from 'react'

import { Question } from './components/Left/Question'
import { Logic } from './components/Right/Logic'


import './App.css'

function App() {
  const [value, updateValue] = useState("");
  const [jsvalue, updatejsValue] = useState("");
  const [cssvalue, updatecssValue] = useState("");
  const [preview, updatePreview] = useState("");
  const [dark, updateDark] = useState(false);
  const [selected, updateSelected] = useState("HTML");
  return (<div>
    <div className='left-div' style={{ "width": "45%", "float": "left", "background": "#ccc" }}>
      <Question />
    </div>
    <div className='right-div' style={{ "width": "55%", "float": "left" }}>
      <div className="playground">
        <select  value={selected}
          onChange={(e) => {
            updateSelected(e.target.value);
          }}>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
        </select>
      </div>
      <Logic />
    </div>

  </div>)
}

export default App