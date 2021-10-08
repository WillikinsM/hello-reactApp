import "./index.scss";
// import scrollSmooth from "./scrollSmth";

interface Props {
  title: string;
  description: string;
  link: string;
}

const AppCard = ({ title, description, link }: Props) => {
  //const scrollSmooth = ({id}:Props)=>{
  //let offset = undefined
  // offset = document.getElementById(id)?.offsetTop;

  // window.scroll({
  //  top: offset - 100,
  // behavior: "smooth",
  //});
  //}

  return (
    <span
      className="card-post img-effect1"
      // onClick={() => scrollSmooth(name[0])}
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
    </span>
  );
};

export default AppCard;
