import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbs }: any) => {
  return (
    <div className="breadcrumb">
      {crumbs.map(({ label, path }: any, key: any) =>
        key + 1 === crumbs.length ? (
          <span key={key} className="bread-span">
            {label}
          </span>
        ) : (
          <Link key={key} className="bread-link" to={path}>
            {label}
          </Link>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
