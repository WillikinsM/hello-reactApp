import "./index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const tableData = [
  { name: "Oto Patama", category: "Música", releaseYear: 2020 },
  { name: "The Office", category: "Série", releaseYear: 2005 },
  { name: "The Witcher 3", category: "Jogo", releaseYear: 2015 },
  { name: "Final Fantasy XV", category: "Jogo", releaseYear: 2016 },
  { name: "Fullmetal Alchmist", category: "Anime", releaseYear: 2009 },
  { name: "Closed On Sunday", category: "Música", releaseYear: 2019 },
  { name: "Utopia", category: "Série", releaseYear: 2020 },
  { name: "In My Room", category: "Música", releaseYear: 2019 },
  { name: "Real Compton City G's", category: "Música", releaseYear: 1993 },
  { name: "So Fresh, So Clean", category: "Música", releaseYear: 2000 },
  { name: "Community", category: "Série", releaseYear: 2009 },
  { name: "One Piece", category: "Anime", releaseYear: 1997 },
  { name: "JoJo's Bizarre Adventures", category: "Anime", releaseYear: 2016 },
  { name: "Apex Legends", category: "Jogo", releaseYear: 2019 },
  { name: "Spider-Man", category: "Jogo", releaseYear: 2018 },
  { name: "Mass Effect", category: "Jogo", releaseYear: 2007 },
];

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

export { CreateRows, tableData };