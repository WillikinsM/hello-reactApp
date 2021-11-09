import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

export class TableStore {
  tableData: [] = [];
  nextPage: number = 2;
  isSorted: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  sortedPaginator = async (
    colum: string,
    order: string,
    page: number,
    limit: number
  ) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/table?page=${page}&limit=${limit}`,
        {
          order: order,
          sort: colum,
        }
      );

      runInAction(() => {
        this.tableData = response.data.results;
        this.nextPage = response.data.next.page;
        this.isSorted = true;
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  initialPaginator = async (page: number, limit: number) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/table?page=${page}&limit=${limit}`
      );
      runInAction(() => {
        this.tableData = response.data.results;
        this.nextPage = response.data.next.page;
        console.log(response.data);
        console.log(this.nextPage);
      });
    } catch (error) {
      console.log(error);
    }
  };
}
