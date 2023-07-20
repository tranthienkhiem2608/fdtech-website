import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Service from "./components/Service/Service";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
      </div>
      <div>
        <About />
        <Products />
        <Service />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
