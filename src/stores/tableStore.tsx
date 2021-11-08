import { action, makeAutoObservable } from "mobx";
import { toJS } from "mobx";
import axios from "axios";

export class TableStore {
  tableData: [] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getTableData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/table");
      this.tableData = response.data;
      console.log(this.tableData);
    } catch (error) {
      console.log(error);
    }
  };

  sortData = async (colum: string, order: string) => {
    try {
      const response = await axios.post("http://localhost:8080/table", {
        order: order,
        sort: colum,
      });
      this.tableData = response.data;
      console.log(toJS(this.tableData));
      return this.tableData;
    } catch (error) {
      console.log(error);
    }
  };
}
