import "./index.scss";
// import scrollSmooth from "./scrollSmth";

interface Props {
  title: string;
  description: string;
  link: string;
  hre: string;
}

const AppCard = ({ title, description, link, hre }: Props) => {
  return (
    <a
      className="card-post img-effect1"
      // onClick={() => scrollSmooth(name[0])}
      href={hre}
    >
      <div className="col">
        <div className="card h-100">
          <img src={link} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default AppCard;
