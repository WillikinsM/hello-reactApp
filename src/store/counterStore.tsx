import { observable } from "mobx";
import axios from "axios";

export class CounterStore {
  @observable
  name: string = "";
  @observable
  info: string = "";
  @observable
  lorem: string = "";

  @observable
  retriveData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/infos");
      console.log(response);
      this.name = response.data.myName;
      this.info = response.data.myBasic;
      this.lorem = response.data.loremIpsum;
    } catch (error) {
      console.log(error);
    }
  };
}
