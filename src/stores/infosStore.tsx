import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { envs } from "../config";

export class InfosStore {
  name: string = "";
  info: string = "";
  lorem: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  retriveData = async () => {
    try {
      const response = await axios.get(`${envs.REACT_APP_API_URL}/infos`);
      runInAction(() => {
        this.name = response.data.myName;
        this.info = response.data.myBasic;
        this.lorem = response.data.loremIpsum;
      });
    } catch (error) {
      console.log(error);
    }
  };
}
