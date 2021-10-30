import React from "react";
import { Link } from "react-router-dom";

// const BreadcrumbItem = ({ children, ...props }: any) => (
//   <li className="breadcrumb-item" {...props}>
//     {children}
//   </li>
// );

// const Breadcrumb = (props: any) => {
//   let children = React.Children.toArray(props.children) as Array<any>;

//   children = children.map((child, index) => (
//     <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
//   ));

//   const lastIndex = children.length - 1;

//   children = children.reduce((acc, child, index) => {
//     const notLast = index < lastIndex;
//     if (notLast) {
//       acc.push(
//         child,
//         <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
//           /
//         </BreadcrumbSeparator>
//       );
//     } else {
//       acc.push(child);
//     }
//     return acc;
//   }, []);

//   return <ol>{children}</ol>;
// };

// const BreadcrumbSeparator = ({ children, ...props }: any) => (
//   <li className="breadcrumb-separator" {...props}>
//     {children}
//   </li>
// );

// export default Breadcrumb;

const Breadcrumbs = ({ crumbs }: any) => {
  console.log(crumbs);
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
