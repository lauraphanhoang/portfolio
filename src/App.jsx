import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import Project from "./pages/Developpement";
import Communication from "./pages/Communication";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <nav>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              justifyContent: "center",
              marginBottom: 70,
              flexWrap: "wrap",
            }}
          >
            <li>
              <Link to="/">A propos</Link>
            </li>
            <li>
              {" "}
              <Link to="/projets">Developpement Web</Link>
            </li>
            <li>
              {" "}
              <Link to="/communication-digitale">Communication Digitale</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projets" element={<Project />}></Route>
          <Route
            path="/communication-digitale"
            element={<Communication />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
