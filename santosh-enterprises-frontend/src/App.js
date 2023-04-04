import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import UshaApi from "./components/UshaApi";
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Layout>
          <UshaApi/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
