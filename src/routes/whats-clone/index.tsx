import { observer } from "mobx-react-lite";
import { useMStore } from "../../stores";
import { Chat, Home } from "./components/chat";
import ContactsList from "./components/contacts-list";
import "./index.scss";

const Messages = observer(() => {
  const messageStore = useMStore("messageStore");

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <ContactsList />
          {messageStore.chatId === 0 ? <Home /> : <Chat />}
        </div>
      </div>
    </>
  );
});

export default Messages;
