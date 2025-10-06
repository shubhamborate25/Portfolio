import { Route, Routes } from "react-router";
import Home from "./home";
import Navbar from "./navbar";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
