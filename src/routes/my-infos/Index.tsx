import "./index.scss";
import img from "../../assets/sanjis.png";
import { Link } from "react-router-dom";
import { useStore } from "../../store/hooks";
import { observer } from "mobx-react-lite";
import { retriveInfos } from "../../store/counterStore";

const MyInfos = observer(() => {
  retriveInfos();
  const counterStore = useStore("counterStore");

  return (
    <>
      <img className="img-sanji" src={img} alt="Sanji-One Piece" height="200" />
      <h1 className="my-name">{counterStore.name}</h1>
      <h4>
        <em>{counterStore.info}</em>
        <br />
        {counterStore.lorem}
      </h4>
      <Link type="button" className="btn btn-dark" to="/">
        Go to Home Page
      </Link>
    </>
  );
});

export default MyInfos;
