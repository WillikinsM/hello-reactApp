import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useTStore } from "../../../../stores/hooks";
import Filtering from "./filter";
import "./index.scss";

const FormTable = observer(() => {
  const tableStore = useTStore("tablestores");
  const [index, setIndex] = useState("name");

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
            <optgroup className="btn btn-secondary" label="Category &raquo">
              <option value="musica">Música</option>
              <option value="serie">Série</option>
              <option value="jogo">Jogo</option>
              <option value="anime">Anime</option>
            </optgroup>
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
        onKeyUp={(e) =>
          tableStore.paginatorFilter(1, 16, e.currentTarget.value, index)
        }
        placeholder="Type here..."
      />
    </div>
  );
});

export default FormTable;
