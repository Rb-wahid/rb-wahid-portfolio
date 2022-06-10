import "./App.css";
import ContactMe from "./pages/ContactMe";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div>
        <Header />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
