import React from 'react';
import './App.css';
import { Stage, Sprite } from '@inlet/react-pixi'

const App = () => (
  <Stage>
    <Sprite image="./logo512.png" x={100} y={100} />
  </Stage>
)

export default App;
