import "./index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
  name: string;
  category: string;
  releaseYear: number;
}

const CreateTable = ({ name, category, releaseYear }: Props) => {
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

const sortTable = (n: number) => {
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("my-table") as HTMLTableElement;
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir === "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode!.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
  switchIcon(n, dir);
};

const switchIcon = (n: number, dir: string) => {
  let icoDown = document.createElement("i");
  icoDown.className = "bi bi-arrow-down-short";
  let icoUp = document.createElement("i");
  icoUp.className = "bi bi-arrow-up-short";

  if (dir === "asc") {
    let header = document.getElementById("my" + n + "header") as HTMLElement;
    if (header.children[0] !== undefined) {
      header.children[0].remove();
    }

    header.appendChild(icoDown);
  }
  if (dir === "desc") {
    let header = document.getElementById("my" + n + "header") as HTMLElement;
    if (header.children[0] !== undefined) {
      header.children[0].remove();
    }
    header.appendChild(icoUp);
  }
};

export { CreateTable, sortTable };
