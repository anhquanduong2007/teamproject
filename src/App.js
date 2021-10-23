import {Switch,Route} from "react-router-dom";
import Home from "pages/Home";
import Header from "components/Header";
import ContactUs from "pages/ContactUs";
import Footer from "components/Footer";
const App = () =>  {
  return (
    <>
      <Header/>
      <Switch>
        <Route component = {ContactUs} path = "/contactus" />
        <Route component = {Home} path = "/" exact/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
