import "./index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
  name: string;
  category: string;
  releaseYear: number;
}

const CreateRows = ({ name, category, releaseYear }: Props) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{category}</td>
        <td>{releaseYear}</td>
      </tr>
    </>
  );
};

export { CreateRows };
