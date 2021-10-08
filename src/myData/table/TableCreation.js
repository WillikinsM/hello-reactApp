function CreatTable() {
  <div id="my-data"></div>;
  let myTable = document.getElementById("my-data");
  let tableData = [
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

  let headers = ["Name", "Category", "Release Year"];
  let table = document.createElement("table");
  table.className = "table table-striped table-bordered table-hover ms-auto";
  table.id = "my-table";
  let tHead = document.createElement("thead");
  tHead.className = "table-dark";
  let headerRow = document.createElement("tr");

  let tBody = document.createElement("tbody");
  let icoDown = document.createElement("i");
  icoDown.className = "bi bi-arrow-down-short";
  let icoUp = document.createElement("i");
  icoUp.className = "bi bi-arrow-up-short";

  for (var i = 0; i < headers.length; i++) {
    let header = document.createElement("th");
    header.setAttribute("onclick", "sortTable(" + i + ")");
    header.id = "my" + i + "header";
    let textNode = document.createTextNode(headers[i]);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  }

  tHead.appendChild(headerRow);
  table.appendChild(tHead);

  tableData.forEach((emp) => {
    let row = document.createElement("tr");
    Object.values(emp).forEach((text) => {
      let cell = document.createElement("td");
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    tBody.appendChild(row);
    table.appendChild(tBody);
  });
  myTable.appendChild(table);
}

export default CreatTable;
