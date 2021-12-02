import { observer } from "mobx-react-lite";
import { useLayoutEffect, useRef } from "react";
import { useMStore } from "../../../../../stores";
import Content from "../message";
import "./index.scss";

const Messages = observer(() => {
  const messageStore = useMStore("messageStore");
  const scrollAux = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (scrollAux.current) {
      scrollAux.current.scrollIntoView(true);
    }
  });

  return (
    <div className="chat-content">
      <div>
        {/*  <div className="chat-date-wrapper">
          <span className="chat-date">{Object.keys(user[0].dates)[0]}</span>
        </div>  */}
        {messageStore.messageData.map((item: any, index) => (
          <Content
            key={index}
            content={item.content}
            timestamp={item.timestamp}
            self={item.self}
            group={item.group}
            user={item.user}
            type={item.type}
          />
        ))}
        <div id={"scrollAux"} ref={scrollAux} />
      </div>
    </div>
  );
});

export default Messages;
