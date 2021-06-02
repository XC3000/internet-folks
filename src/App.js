import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
