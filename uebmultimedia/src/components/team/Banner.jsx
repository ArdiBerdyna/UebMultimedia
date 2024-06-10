import React, { useEffect, useState } from 'react';
import { Stage, Container, Sprite, useApp, useTick } from '@pixi/react';
import * as PIXI from 'pixi.js';
import "./team.css"

const  image1 = './images/img2.jpg';
const  image3 = './images/img3.jpg';
const  image2 = './images/img4.jpg';
const  image4 = './images/img5.jpg';
const InteractiveBanner = () => {
    const [position, setPosition] = useState(0);
    const app = useApp();
    const [alpha, setAlpha] = useState(0);
    const [scale, setScale] = useState(1);

    useTick(delta => {
        const speed = 3 * delta;
        let newPosition = position - speed;
        
        if (newPosition <= -2190) {
            newPosition = 0;
        }
        setPosition(newPosition);

        // Scale and rotation adjustment
        if (newPosition >= -130 && newPosition <= 0) {
           
            setScale(1 + (130 + newPosition) / 1000);  // Make the scale change more subtle
 
        } else if (newPosition <= -2000) {
            setAlpha((-2000 - newPosition) / 200);
            setScale(1 - (-2000 - newPosition) / 2000); // Make the scale change more subtle at the end
           
        } else {
            setAlpha(1);
            setScale(1);
            
        }
    });

    useEffect(() => {
        if (app && app.loader) {
            if (!app.loader.resources[image1]) {
                app.loader.add([image1, image2, image3, image4]).load();
            }
        }
    }, [app]);

    const images = [image1, image2, image3, image4];
    const imageWidth = 800; // Width of each image
    const spacing = 40;  // Space between images
    const totalWidth = images.length * (imageWidth + spacing); // Adjust total width to include spacing

    // mi pas imagjet krejt kapun osht kjo 
    // const imageWidth = 800;
    // const totalWidth = images.length * imageWidth;
    
    return (
        <Container>
            {images.map((image, index) => (
                <Sprite
                    key={index}
                    image={image}
                    x={(position + index * (imageWidth + spacing)) % totalWidth} // Adjust x to include spacing
                    y={0}
                    width={imageWidth * scale}
                    height={300 * scale}
                    alpha={alpha}
                    
                />
            ))}
        </Container>
    );
};

const Banner = () => (
    
    <div className="stage-container">
    <Stage width={1600} height={300} options={{ backgroundColor: 'lightgray', autoDensity: true, resolution: window.devicePixelRatio || 1 }}>
      <InteractiveBanner />
    </Stage>
  </div>
);

export default Banner;
