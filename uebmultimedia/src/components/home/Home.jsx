import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";

const Home = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });

  const fadeIn1 = useSpring({ opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(20px)', config: { duration: 500 } });
  const fadeIn2 = useSpring({ opacity: inView2 ? 1 : 0, transform: inView2 ? 'translateY(0)' : 'translateY(20px)', config: { duration: 500 } });
  const fadeIn3 = useSpring({ opacity: inView3 ? 1 : 0, transform: inView3 ? 'translateY(0)' : 'translateY(20px)', config: { duration: 500 } });
  const fadeIn4 = useSpring({ opacity: inView4 ? 1 : 0, transform: inView4 ? 'translateY(0)' : 'translateY(20px)', config: { duration: 500 } });
  const fadeIn5 = useSpring({ opacity: inView5 ? 1 : 0, transform: inView5 ? 'translateY(0)' : 'translateY(20px)', config: { duration: 500 } });

  return (
    <>
      <Hero />
      <animated.div style={fadeIn1} ref={ref1}>
        <AboutCard />
      </animated.div>
      <animated.div style={fadeIn2} ref={ref2}>
        <HAbout />
      </animated.div>
      <animated.div style={fadeIn3} ref={ref3}>
        <Testimonal />
      </animated.div>
      <animated.div style={fadeIn4} ref={ref4}>
        <Hblog />
      </animated.div>
      <animated.div style={fadeIn5} ref={ref5}>
        <Hprice />
      </animated.div>
      
    </>
  );
};

export default Home;
