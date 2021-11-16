import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { envs } from "../config";

export class TableStore {
  tableData: [] = [];
  shouldSort: boolean = false;
  shouldFilter: boolean = false;

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
          `${envs.REACT_APP_API_URL}/table?page=${page}&limit=${limit}`,
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
          `${envs.REACT_APP_API_URL}/table?page=${page}&limit=${limit}`
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

  setFilter = (shouldFilter: boolean) => {
    this.shouldFilter = shouldFilter;
  };

  ///
  paginatorFilter = async (
    page: number,
    limit: number,
    filter: string,
    index: string
  ) => {
    try {
      const response = await axios.post(
        `${envs.REACT_APP_API_URL}/form?page=${page}&limit=${limit}`,
        {
          filter: filter,
          index: index,
        }
      );
      runInAction(() => {
        this.tableData = response.data.results;
        console.log(response.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  };
}
