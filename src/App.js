import { Footer } from "./components/Footer";
import Header from "./components/Header";
import color from "./assets/images/colocode.jpg"
import Banner from "./components/Banner";
import Home from "./page/Home";

function App() {
  return (
    <div className="font-graphik bg-[rgba(80,56,121,0.02)]">
       <Header/>
       
       {/* <img className=" mx-auto mt-[20rem]" src={color} alt='color'/> */}
       <Banner/>
       <Home/>
       <Footer/>
    </div>
  );
}

export default App;
