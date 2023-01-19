import { Footer } from "./components/Footer";
import Header from "./components/Header";
// import color from "./assets/images/colocode.jpg"
import Banner from "./components/Banner";
import Home from "./page/Home";
import Programs from "./components/Programs";
import WhyUs from "./components/WhyUs";
import { Course } from "./components/Course";
import Faqs from "./components/Faqs";
import Advertise from "./components/Advertise";

function App() {
  return (
    <div className=" border border-[red] font-graphik bg-[rgba(80,56,121,0.03)]">
       <Header/>       
       <Banner/>
       {/* <WhyUs/> */}
       <Home/>

       {/* <Programs/> */}
       {/* <Faqs/> */}
       {/* <Course/> */}
       {/* <Advertise/> */}
       <Footer/>
    </div>
  );
}

export default App;
