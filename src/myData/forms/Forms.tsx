import Filtering from "./filter";

function Form() {
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <div className="dropdown">
        <select className="btn btn-secondary" id="options" name="options">
          <option className="btn btn-secondary" value="name">
            Name
          </option>
          <optgroup className="btn btn-secondary" label="Category &raquo">
            <option value="musica">Música</option>
            <option value="serie">Série</option>
            <option value="jogo">Jogo</option>
            <option value="anime">Anime</option>
          </optgroup>
          <option className="btn btn-secondary" value="year">
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
      onKeyUp={() => Filtering()}
      placeholder="Type here..."
    />
  </div>;
}

export default Form;
