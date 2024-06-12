import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Testimonial from "./Testimonial"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <br /> <br />
      <Testimonial />
      <AboutCard />
    </>
  )
}

export default About
