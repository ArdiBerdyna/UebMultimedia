import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import LoginForm from "./components/User/LoginForm"
import Registration from "./components/User/Registration"
import Admin from "./Admin/Admin"
import Layout from './Layout'

function App() {
  const location = useLocation(); 
// This hook gives us access to the location object
if (location.pathname.startsWith('/admin')) {
  return <Route exact path='/admin' component={Admin} />;
} else {
  return <Layout />;
}
  // return (
  //   <>
  //     <Router>
  //     {location.pathname.startsWith('/admin') ? (
        
  //         <Route exact path='/admin' component={Admin} />
       
  //     ) : (
  //       <Layout />
  //     )}

  //     </Router>
  //   </>
  // )
}

export default App
