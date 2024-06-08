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
  style={{ 
    opacity: 0, // Start as invisible
    animation: inView ? `fadeInUp 0.5s ease-out forwards ${index * 0.2 + 0.5}s` : "none",
    display: 'flex', // Using Flexbox
    flexDirection: 'column', // Stack children vertically
    justifyContent: 'space-between', // Space between items
    height: '100%' // Ensure the box takes full container height
  }}
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

const OnlineCourses = () => {
    return (
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val, index) => (
              <CourseBox key={index} val={val} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default OnlineCourses;
  