import { CreateRows, SortTableR } from "./components/table";
import FormTable from "./components/forms";
import { useState } from "react";

const tableData = [
  { name: "Oto Patama", category: "Música", releaseYear: 2020 },
  { name: "The Office", category: "Série", releaseYear: 2005 },
  { name: "The Witcher 3", category: "Jogo", releaseYear: 2015 },
  { name: "Final Fantasy XV", category: "Jogo", releaseYear: 2016 },
  { name: "Fullmetal Alchmist", category: "Anime", releaseYear: 2009 },
  { name: "Closed On Sunday", category: "Música", releaseYear: 2019 },
  { name: "Utopia", category: "Série", releaseYear: 2020 },
  { name: "In My Room", category: "Música", releaseYear: 2019 },
  { name: "Real Compton City G's", category: "Música", releaseYear: 1993 },
  { name: "So Fresh, So Clean", category: "Música", releaseYear: 2000 },
  { name: "Community", category: "Série", releaseYear: 2009 },
  { name: "One Piece", category: "Anime", releaseYear: 1997 },
  { name: "JoJo's Bizarre Adventures", category: "Anime", releaseYear: 2016 },
  { name: "Apex Legends", category: "Jogo", releaseYear: 2019 },
  { name: "Spider-Man", category: "Jogo", releaseYear: 2018 },
  { name: "Mass Effect", category: "Jogo", releaseYear: 2007 },
];

const DataTab = () => {
  const [sortingColumn, setSortingColumn] = useState("");

  const [sortingOrder, setSortingOrder] = useState("asc");

  const [sortedColumn, setSortedColumn] = useState("");

  return (
    <>
      <div className="data-form">
        <FormTable />

        <div id="my-data">
          <table
            className="table table-striped table-bordered table-hover ms-auto"
            id="my-table"
          >
            <thead className="table-dark">
              <tr>

                <th
                  className={sortedColumn === "name" ? "text-bold" : ""}
                  onClick={() => SortTableR()}
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
                  onClick={() => SortTableR()}
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
                  onClick={() => SortTableR()}
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

              {tableData.map((item) => (
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
    </>
  );
};

export { DataTab, tableData };
