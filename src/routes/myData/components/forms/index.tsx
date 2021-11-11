import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useTStore } from "../../../../stores/hooks";
import "./index.scss";

const FormTable = observer(() => {
  const tableStore = useTStore("tablestores");
  const [index, setIndex] = useState("name");

  const filterConfig = (e: any) => {
    tableStore.setFilter(true);
    tableStore.paginatorFilter(1, 16, e.currentTarget.value, index);
    if (e.currentTarget.value === "") {
      tableStore.setFilter(false);
    }
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="dropdown">
          <select
            className="btn btn-secondary"
            id="options"
            name="options"
            onChange={(e) => setIndex(e.currentTarget.value)}
          >
            <option className="btn btn-secondary" value="name">
              Name
            </option>
            <option className="btn btn-secondary" value="category">
              Category
            </option>
            <option className="btn btn-secondary" value="releaseYear">
              Release Year
            </option>
          </select>
        </div>
      </div>
      <input
        className="form-control"
        type="text"
        id="text-tab"
        name="text-tab"
        onKeyUp={(e) => filterConfig(e)}
        placeholder="Type here..."
      />
    </div>
  );
});

export default FormTable;
