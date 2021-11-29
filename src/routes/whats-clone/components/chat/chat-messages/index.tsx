import { observer } from "mobx-react-lite";
import { useMStore } from "../../../../../stores";
import Content from "../message";
import "./index.scss";

const Messages = observer(() => {
  const messageStore = useMStore("messageStore");
  messageStore.retriveMessage(messageStore.chatId);

  let messages = messageStore.messageData;

  return (
    <div className="chat-content">
      <div>
        {/*  <div className="chat-date-wrapper">
          <span className="chat-date">{Object.keys(user[0].dates)[0]}</span>
        </div>  */}
        {messages.map((item: any, index) => (
          <Content
            key={index}
            content={item.content}
            timestamp={item.timestamp}
            self={item.self}
            group={item.group}
            user={item.user}
          />
        ))}
      </div>
    </div>
  );
});

export default Messages;
