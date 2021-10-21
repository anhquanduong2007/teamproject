import {Switch,Route} from "react-router-dom";
import Home from "pages/Home";
import Header from "components/Header";
const App = () =>  {
  return (
    <>
      <Header/>
      <Switch>
        <Route component = {Home} path = "/" exact/>
      </Switch>
    </>
  );
}

export default App;
