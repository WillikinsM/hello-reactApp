import { makeAutoObservable } from "mobx";
import axios from "axios";

export class InfosStore {
  name: string = "";
  info: string = "";
  lorem: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  retriveData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/infos");
      this.name = response.data.myName;
      this.info = response.data.myBasic;
      this.lorem = response.data.loremIpsum;
    } catch (error) {
      console.log(error);
    }
  };
}
