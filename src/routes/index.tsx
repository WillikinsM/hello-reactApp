import { BrowserRouter as Router, Route } from "react-router-dom";
import Hello from "./hello";
import DataTab from "./myData";
import MyInfos from "./my-infos/Index";
import Breadcrumbs from "../components/breadcrumbs";
import Messages from "./whats-clone";

const routes = [
  { path: "/", label: "Home", Component: Hello },
  { path: "/table", label: "Table", Component: DataTab },
  { path: "/infos", label: "My-Infos", Component: MyInfos },
  { path: "/message", label: "Messages", Component: Messages },
];

const Routes = () => (
  <Router>
    <div className="router">
      {routes.map(({ path, label, Component }, key) => (
        <Route
          exact
          path={path}
          key={key}
          render={(props: any) => {
            const crumbs = routes
              .filter(({ path }) => props.match.path.includes(path))
              .map(({ path, ...rest }) => ({
                path: Object.keys(props.match.params).length
                  ? Object.keys(props.match.params).reduce(
                      (path, param) =>
                        path.replace(`:${param}`, props.match.params[param]),
                      path
                    )
                  : path,
                ...rest,
              }));

            return (
              <div className="bread">
                <Breadcrumbs crumbs={crumbs} />
                <Component {...props} />
              </div>
            );
          }}
        />
      ))}
    </div>
  </Router>
);
export default Routes;
