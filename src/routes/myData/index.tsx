import { observer } from "mobx-react-lite";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTStore } from "../../stores/hooks";
import FormTable from "./components/forms";
import { tableData, CreateRows } from "./components/table";
import Pagination from "./components/table/paginator";

const PageSize = [
  {
    value: 5,
    label: 5,
  },
  {
    value: 10,
    label: 10,
  },
  {
    value: 15,
    label: 15,
  },
];

const DataTab = observer(() => {
  const [sortingColumn, setSortingColumn] = useState("");
  const [sortingOrder, setSortingOrder] = useState("");
  const [sortedColumn, setSortedColumn] = useState("");
  const [pageSize, setPagesize] = useState(10);
  const tableStore = useTStore("tablestores");
  tableStore.getTableData();

  // eslint-disable-next-line react-hooks/exhaustive-deps

  /*   if (
    sortingColumn === "name" ||
    sortingColumn === "category" ||
    sortingColumn === "releaseYear"
  ) {
    adjustableValue.sort((a, b) => {
      if (a[sortingColumn] < b[sortingColumn]) {
        return sortingOrder === "asc" ? -1 : 1;
      }
      if (a[sortingColumn] > b[sortingColumn]) {
        return sortingOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  } */

  const sortConfg = (key: string) => {
    let direction = "asc";
    if (sortingColumn === key && sortingOrder === "asc") {
      direction = "desc";
    }

    setSortingOrder(direction);
    setSortingColumn(key);
    setSortedColumn(key);
    tableStore.sortData(key, direction);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return tableStore.tableData.slice(firstPageIndex, lastPageIndex);
  }, [tableStore.tableData, currentPage, pageSize]);

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
              {currentTableData.map((item: any) => (
                <CreateRows
                  key={item.name}
                  name={item.name}
                  category={item.category}
                  releaseYear={item.releaseYear}
                />
              ))}
            </tbody>
          </table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={tableStore.tableData.length}
            pageSize={pageSize}
            onPageChange={(page: number) => setCurrentPage(page)}
          />

          <label>Row leght:</label>
          <select
            value={pageSize}
            onChange={(e) => setPagesize(parseInt(e.target.value))}
          >
            {PageSize.map((item, key) => (
              <option key={key} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="router-button">
        <Link type="button" className="btn btn-dark" to="/">
          Go to Home Page
        </Link>
      </div>
    </>
  );
});

export default DataTab;
