import "./index.scss";
import img from "../../assets/sanjis.png";
import { Link } from "react-router-dom";
import { useStore } from "../../stores/hooks";
import { observer } from "mobx-react-lite";
import FooterEnd from "../../components/footer-end";

const MyInfos = observer(() => {
  const infosStore = useStore("infosStore");
  infosStore.retriveData();

  return (
    <>
      <img className="img-sanji" src={img} alt="Sanji" height="200" />
      <h1 className="my-name">{infosStore.name}</h1>
      <h4>
        <em>{infosStore.info}</em>
        <br />
        {infosStore.lorem}
      </h4>
      <Link type="button" className="btn btn-dark" to="/">
        Go to Home Page
      </Link>
      <FooterEnd />
    </>
  );
});

export default MyInfos;
