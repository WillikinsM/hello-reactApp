import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Hello from "./hello";
import DataTab from "./myData";
import MyInfos from "./my-infos/Index";
import Breadcrumb from "../components/breadcrumbs";

const items = [
  { to: "/", label: "Home" },
  { to: "/table", label: "Table" },
  { to: "/infos", label: "My-Infos" },
];

const Routes = () => {
  return (
    <div className="route">
      <Router>
        <Breadcrumb>
          {items.map(({ to, label }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </Breadcrumb>
        <Route component={Hello} path="/" exact />
        <Route component={DataTab} path="/table" />
        <Route component={MyInfos} path="/infos" />
      </Router>
    </div>
  );
};
export default Routes;
