import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormTable from "./components/forms";

import { tableData, CreateRows } from "./components/table";

const DataTab = () => {
  const [sortingColumn, setSortingColumn] = useState("");
  const [sortingOrder, setSortingOrder] = useState("");
  const [sortedColumn, setSortedColumn] = useState("");

  let adjustableValue = [...tableData];

  if (sortingColumn === "name") {
    adjustableValue.sort((a, b) => {
      if (a.name < b.name) {
        return sortingOrder === "asc" ? -1 : 1;
      }
      if (a.name > b.name) {
        return sortingOrder === "asc" ? 1 : -1;
      }

      return 0;
    });
  } else if (sortingColumn === "category") {
    adjustableValue.sort((a, b) => {
      if (a.category < b.category) {
        return sortingOrder === "asc" ? -1 : 1;
      }
      if (a.category > b.category) {
        return sortingOrder === "asc" ? 1 : -1;
      }

      return 0;
    });
  } else if (sortingColumn === "releaseYear") {
    adjustableValue.sort((a, b) => {
      if (a.releaseYear < b.releaseYear) {
        return sortingOrder === "asc" ? -1 : 1;
      }
      if (a.releaseYear > b.releaseYear) {
        return sortingOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  }

  const sortConfg = (key: string) => {
    let direction = "asc";
    if (sortingColumn === key && sortingOrder === "asc") {
      direction = "desc";
    }
    setSortingOrder(direction);
    setSortingColumn(key);
    setSortedColumn(key);
  };

  return (
    <>
      <div className="data-form">
        <FormTable />

        <div id="my-table">
          <table
            className="table table-striped table-bordered table-hover ms-auto"
            id="my-table"
          >
            <thead className="table-dark">
              <tr>
                <th
                  className={sortedColumn === "name" ? "text-bold" : ""}
                  onClick={() => {
                    sortConfg("name");
                  }}
                  id="my0header"
                >
                  Name
                  {sortedColumn === "name" && sortingOrder === "asc" ? (
                    <i className="bi bi-arrow-down-short" />
                  ) : sortedColumn === "name" && sortingOrder === "desc" ? (
                    <i className="bi bi-arrow-up-short" />
                  ) : (
                    ""
                  )}
                </th>

                <th
                  className={sortedColumn === "category" ? "text-bold" : ""}
                  onClick={() => {
                    sortConfg("category");
                  }}
                  id="my1header"
                >
                  Category
                  {sortedColumn === "category" && sortingOrder === "asc" ? (
                    <i className="bi bi-arrow-down-short" />
                  ) : sortedColumn === "category" && sortingOrder === "desc" ? (
                    <i className="bi bi-arrow-up-short" />
                  ) : (
                    ""
                  )}
                </th>

                <th
                  className={sortedColumn === "releaseYear" ? "text-bold" : ""}
                  onClick={() => {
                    sortConfg("releaseYear");
                  }}
                  id="my2header"
                >
                  Release Year
                  {sortedColumn === "releaseYear" && sortingOrder === "asc" ? (
                    <i className="bi bi-arrow-down-short" />
                  ) : sortedColumn === "releaseYear" &&
                    sortingOrder === "desc" ? (
                    <i className="bi bi-arrow-up-short" />
                  ) : (
                    ""
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {adjustableValue.map((item) => (
                <CreateRows
                  key={item.name}
                  name={item.name}
                  category={item.category}
                  releaseYear={item.releaseYear}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="router-button">
        <Link type="button" className="btn btn-dark" to="/">
          Go to Home Page
        </Link>
      </div>
    </>
  );
};

export default DataTab;
