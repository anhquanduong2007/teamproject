import "./App.css";
import Footer from "components/Footer";
import Header from "components/Header";
import { Route, Switch,Redirect } from "react-router-dom";
import ContactUs from "pages/ContactUs";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/contactUs" component = {ContactUs}/>
        <Route path="/home" component = {Home}/>
        <Redirect from="/" to="/home" exact/>
        <Route path = "*" component = {NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
