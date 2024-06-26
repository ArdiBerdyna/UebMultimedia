import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  return (
    <>
    
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val, index) => (
            <div className='items' style={{ '--animation-order': index }}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' loading="lazy"/>
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' loading="lazy" />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
      <video 
  src="./images/second.mp4"
  controls preload="metadata"
  style={{
    width: '850px',      // Adjust width as needed
    height: '500px',    // Specify height
    margin: '20px 700px' // Centering the video with margin
  }}
>
  Your browser does not support the video tag.
</video>

    </>
  )
}

export default CoursesCard
