import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
import TextAnimation from "./TextAnimation"

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <br /><br /><br />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <TextAnimation />

      <Faq />
    </>
  )
}

export default Pricing
