import React, { useState, useEffect } from 'react';
import { Stage, Container, Sprite, Text, useApp } from '@pixi/react';
import * as PIXI from 'pixi.js';
import "./team.css"

const image1 = './images/bg.webp';

const image2 = './images/courses/c6.png';
const image3 = './images/courses/c7.png';
const image4 = './images/courses/c8.png';
const image5 = './images/courses/c9.png';
const image6 = './images/courses/c5.png';


const SequentialFigures = () => {
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);
    const [showforth, setShowforth] = useState(false);
    const [showFifth, setShowFifth] = useState(false);
    const [showSixth, setShowSixth] = useState(false);
    const [showSeventh, setShowSeventh] = useState(false);
    const app = useApp();

    useEffect(() => {
        let showImageTimers = [];
    
        // Function to initiate showing images
        const initiateImageDisplay = () => {
            showImageTimers.push(setTimeout(() => setShowFirst(true), 0));      // First image
            showImageTimers.push(setTimeout(() => setShowSecond(true), 2000));  // Second image
            showImageTimers.push(setTimeout(() => setShowThird(true), 4000));   // Third image
            showImageTimers.push(setTimeout(() => setShowforth(true), 6000));   // Fourth image
            showImageTimers.push(setTimeout(() => setShowFifth(true), 8000));   // Fifth image
            showImageTimers.push(setTimeout(() => setShowSixth(true), 10000));  // Sixth image
            // Set a timeout to clear all and restart after the last image
            showImageTimers.push(setTimeout(() => {
                // Reset all shows to false
                setShowFirst(false);
                setShowSecond(false);
                setShowThird(false);
                setShowforth(false);
                setShowFifth(false);
                setShowSixth(false);
                // Restart the sequence
                initiateImageDisplay();
            }, 12000)); // 12000 should be adjusted if the timing of the last image needs to be visible longer
        };
    
        initiateImageDisplay();
    
        return () => {
            // Clear all timeouts when the component unmounts
            showImageTimers.forEach(clearTimeout);
        };
    }, []);

    return (
        <Container>
            {showFirst && (
                <Sprite
                    image={image1} // Path to your first image
                    x={0}
                    y={0}
                    width={1100}
                    height={600}
                />
            )}
            {showSecond && (
                <Sprite
                    image={image2} // Path to your second image
                    x={200} // Adjusted so it appears next to the first
                    y={50}
                    width={100}
                    height={100}
                />
            )}
            {showThird && (
                <Sprite
                    image={image3} // Path to your second image
                    x={200} // Adjusted so it appears next to the first
                    y={230}
                    width={100}
                    height={100}
                />
            )}
            
          
        </Container>
    );
};

const Animation = () => (
    <div className="stage-container">
    <Stage width={1100} height={600} options={{ backgroundColor: 'white', autoDensity: true, resolution: window.devicePixelRatio || 1 }}>
        <SequentialFigures />
    </Stage>
    </div>
);

export default Animation;
