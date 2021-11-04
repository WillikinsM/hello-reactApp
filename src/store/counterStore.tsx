import { observable, observe } from "mobx";
import axios from "axios";

export class CounterStore {
  @observable
  name: string = "";
  @observable
  info: string = "";
  @observable
  lorem: string = "";

  setName(data: string) {
    this.name = data;
  }

  setInfo(data: string) {
    this.info = data;
  }

  setLorem(data: string) {
    this.lorem = data;
  }
}

export const retriveInfos = async () => {
  try {
    const response = await axios.get("http://localhost:8080/infos");
    let myData = response.data.map(({ myBasic }: any) => myBasic);
    return myData;
  } catch (error) {
    console.log(error);
  }
};
