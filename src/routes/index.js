import { Switch, Route } from "react-router-dom";
import Challenge1 from "../pages/challenge1";
import Challenge2 from "../pages/challenge2";
import Home from "../pages/home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/challenge-1" component={Challenge1} />
    <Route exact path="/challenge-2" component={Challenge2} />
  </Switch>
);

export default Routes;
