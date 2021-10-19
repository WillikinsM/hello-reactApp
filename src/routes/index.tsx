import { BrowserRouter as Router, Route } from "react-router-dom";
import Hello from "./hello";
import DataTab from "./myData";

const Routes = () => {
  return (
    <Router>
      <Route component={Hello} path="/" exact />
      <Route component={DataTab} path="/table" />
    </Router>
  );
};
export default Routes;
