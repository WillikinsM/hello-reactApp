import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

export class TableStore {
  tableData: [] = [];
  shouldSort: boolean = false;
  counter: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  sortedPaginator = async (
    colum: string,
    order: string,
    page: number,
    limit: number,
    shouldSort: boolean
  ) => {
    if (shouldSort === true) {
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
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.get(
          `http://localhost:8080/table?page=${page}&limit=${limit}`
        );
        runInAction(() => {
          this.tableData = response.data.results;
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  setSort = (shouldSort: boolean) => {
    this.shouldSort = shouldSort;
  };

  initialPaginator = async (page: number, limit: number) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/table?page=${page}&limit=${limit}`
      );
      runInAction(() => {
        this.tableData = response.data.results;
      });
    } catch (error) {
      console.log(error);
    }
  };
}
