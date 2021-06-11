import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import AccountingPage from "./pages/accounting";
import CorporatePage from "./pages/corporate";
import PayrollPage from "./pages/payroll";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
      <Switch>
        <Route path="/about" component={AboutPage} exact />
      </Switch>
      <Switch>
        <Route path="/contact" component={ContactPage} exact />
      </Switch>
      <Switch>
        <Route path="/accounting" component={AccountingPage} exact />
      </Switch>
      <Switch>
        <Route path="/corporate" component={CorporatePage} exact />
      </Switch>
      <Switch>
        <Route path="/payroll" component={PayrollPage} exact />
      </Switch>
      <Switch>
        <Route path="/guides" component={ContactPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
