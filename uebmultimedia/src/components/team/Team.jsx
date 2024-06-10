import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import Banner from "./Banner"
import Animation from "./Animation"

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <br /><br />
      <Banner />
      <br /> 
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <br />
      <Animation />
      
      
    </>
  )
}

export default Team
