import { Footer } from "./components/Footer";
import Header from "./components/Header";
// import color from "./assets/images/colocode.jpg"
import Banner from "./components/Banner";
import Home from "./page/Home";
import Programs from "./components/Programs";

function App() {
  return (
    <div className="font-graphik bg-[rgba(80,56,121,0.03)]">
       <Header/>       
       <Banner/>
       <Home/>
       <Footer/>
       {/* <Programs/> */}
    </div>
  );
}

export default App;
