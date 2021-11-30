import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { envs } from "../config";

export class MessageStore {
  messageData: [] = [];
  contactList: [] = [];
  chatId: number = 0;
  oldChatID: number = 0;
  markerContact: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  retriveMessage = async (id: number) => {
    /* if (this.oldChatID !== id) { */
    try {
      const response = await axios.get(
        `${envs.REACT_APP_API_URL}/message/chat${id}`
      );
      runInAction(() => {
        /* this.oldChatID = id; */
        this.messageData = response.data;
      });
    } catch (error) {
      console.log(error);
    }
    /* } */
  };

  retriveContact = async () => {
    try {
      const response = await axios.get(
        `${envs.REACT_APP_API_URL}/message/chat`
      );
      runInAction(() => {
        this.contactList = response.data;
        this.markerContact = true;
      });
    } catch (error) {
      console.log(error);
    }
  };

  setChatId = (id: number) => {
    runInAction(() => {
      this.chatId = id;
    });
  };
}
