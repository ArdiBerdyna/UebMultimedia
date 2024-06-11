//Per tekst baba
import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Stage, Text } from '@pixi/react';
import * as PIXI from 'pixi.js';
import "./price.css"

const width = 500;
const height = 550;

const textStyle = new PIXI.TextStyle({
    fill: "blue", // Green color
    align: "center",
    fontFamily: "sans-serif",
    fontSize: 60,
    fontWeight: "bold",
    stroke: "#eef1f5",
    strokeThickness: 1,
    letterSpacing: 5,
    wordWrap: true,
    wordWrapWidth: 350
});
   
const Message = ({ poem, interval = 100 }) => {
  const poemChars = useMemo(() => poem.split("").concat([...Array(10)].map(() => '')), [poem]);
  const [text, setText] = useState('');

  useEffect(() => {
    let currentText = '';
    const rest = [...poemChars];

    const timer = setInterval(() => {
      if (rest.length === 0) {
        currentText = '';
        rest.push(...poemChars);
      } else {
        currentText += rest.shift();
      }
      setText(currentText);
    }, interval);

    return () => clearInterval(timer);
  }, [poemChars, interval]);
  console.log(textStyle)
  return <Text text={text} x={width / 2} y={height / 2} anchor={0.5} style={textStyle} />;
};

const TextAnimation = () => (
  <div className='stage-container'>
  <Stage width={width} height={height} options={{ backgroundColor: 0x1eb2a6, autoDensity: true }}>
    <Message poem="Call me lazy,but I try to save time" />
  </Stage>
  </div>
);

export default TextAnimation;

