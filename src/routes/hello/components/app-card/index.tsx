import "./index.scss";

interface Props {
  title: string;
  description: string;
  link: string;
  alt: string;
  hre: string;
}
function scrollSmooth(el: string) {
  let element = document.getElementById(el);

  let offset = element!.offsetTop;

  window.scroll({
    top: offset - 100,
    behavior: "smooth",
  });
}

const AppCard = ({ title, description, link, hre, alt }: Props) => {
  return (
    <span className="card-post img-effect1" onClick={() => scrollSmooth(hre)}>
      <div className="col">
        <div className="card h-100">
          <img src={link} className="card-img-top" alt={alt} />
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
