import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/footers";
// import About from "./components/about":
// import Projects from "./components/Projects/Projects";
// import Resume from "./components/Resume/Resume";
// import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
    <main className="main">
      <Navbar />
      <Home />
      <About />
      {/* <Projects />
      <Resume />
      <Contact /> */}
    </main>
    <Footer />
    </>
  );
}

export default App;