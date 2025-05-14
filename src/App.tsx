// import { useEffect, useState } from "react"
import About from "./components/About"
import Banner from "./components/Banner"
import CallToAction from "./components/CallToAction"
import Clients from "./components/Clients"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Service from "./components/Service"
import WhatsappButton from "./components/WhatsappButton"
import useTemplate from "./hooks/useTemplate"
import './main.css'

function App() {


  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 1000);
  //   return () => clearTimeout(timer);
  // }, []);


  useTemplate();

  return (
    <>
      {/* {isLoading && <div id="preloader">...</div>} */}
{/* <h2>teste</h2> */}
      <Header />
      <Banner />
      <About />
      <Service />
      <CallToAction />
      <Clients />
      <Contacts />
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default App
