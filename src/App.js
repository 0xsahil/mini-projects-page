import "./App.css";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative w-full h-full bg-black bg-opacity-90 mx-auto">
      <div className="relative mx-auto flex items-center flex-col ">
        <Nav />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
