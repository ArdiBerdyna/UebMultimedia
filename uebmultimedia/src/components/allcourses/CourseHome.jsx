import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import VideoComponent from "../about/Video"

const CourseHome = () => {
  return (
    <>

      <Back title='Explore Courses' />
      <br />
      <CoursesCard />
      <OnlineCourses />
      <br /><br /> 
    </>
  )
}

export default CourseHome
