import { Router } from "@reach/router";
import About from "./components/pages/About";
import Blogs from "./components/pages/Blogs";
import Help from "./components/pages/Help";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Blogs path="/blogs" />
      <Help path="/help" />
    </Router>
  );
}

export default App;
