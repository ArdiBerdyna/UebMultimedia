import React from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";
import { useInView } from 'react-intersection-observer';

const CourseBox = ({ val, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2  // Trigger when 50% of the item is visible
  });

  return (
    <div 
  ref={ref}
  className='box'
>
  <div className='img'>
    <img src={val.cover} alt='' />
    <img src={val.hoverCover} alt='' className='show' />
  </div>
  <h1>{val.courseName}</h1> 
  <span style={{ alignSelf: 'flex-end', width: '100%', textAlign: 'center' }}>
    {val.course}
  </span>
</div>
  );
}