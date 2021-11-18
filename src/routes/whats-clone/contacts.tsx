/* eslint-disable jsx-a11y/anchor-is-valid */
const Contacts = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white ">
        <header className="d-flex align-items-center flex-shrink-0  link-dark text-decoration-none border-bottom">
          <div className="header-img">
            <img
              src="https://github.com/mdo.png"
              alt="hugenerd"
              width="40"
              height="40"
              className="rounded-circle"
            ></img>
            <b className="esemibold">BETA</b>
          </div>
          <div className="util-icons">
            <span>
              <i className="bi bi-plus-circle"></i>
              <i className="bi bi-chat-left-text-fill"></i>
              <i className="bi bi-three-dots-vertical"></i>
            </span>
          </div>
        </header>
        <div className="search-contacts">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
        <div className="list-group list-group-flush border-bottom scrollarea">
          <a
            href="#"
            className="list-group-item list-group-item-action active py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default Contacts;
