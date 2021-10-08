function Filtering() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("text-tab");
  filter = input.value
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f \s+]/g, "");
  table = document.getElementById("my-table");
  tr = table.getElementsByTagName("tr");
  var select = document.getElementById("options").selectedIndex;

  if ((select > 0) & (select < 5)) {
    var op = document.getElementById("options");
    input = op.options[op.selectedIndex].text;
    filter = input
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f \s+]/g, "");
    select = 1;
  }
  if (select === 5) {
    select = 2;
  }

  for (i = 0; tr.length; i++) {
    if (input.value === "" || filter === "") {
      var remover = document.getElementById("my-table");
      remover.remove();
      break;
    }
    td = tr[i].getElementsByTagName("td")[select];
    if (td) {
      txtValue =
        td.textContent.normalize("NFD").replace(/[\u0300-\u036f \s+]/g, "") ||
        td.innerText.normalize("NFD").replace(/[\u0300-\u036f \s+]/g, "");
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

export default Filtering;
