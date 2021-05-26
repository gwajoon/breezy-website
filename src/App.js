import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import PricingPage from "./pages/pricing";
import ContactSection from "./pages/contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactSection} exact />
        <Route path="/pricing" component={PricingPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
