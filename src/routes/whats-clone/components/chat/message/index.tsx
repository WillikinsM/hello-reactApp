import moment from "moment";
import classnames from "classnames";

interface Props {
  content: string;
  timestamp: string;
  self: boolean;
  group: boolean;
  user: string;
}

const Content = ({ content, timestamp, self, group, user }: Props) => {
  const messageClass = classnames({
    "chat-msg": true,
    "msg-rec": !self,
    "msg-send": self,
  });
  return (
    <div className="chat-msg-wrapper">
      <p className={messageClass}>
        {group && !self ? (
          <small className="chat-contact-name">{user}</small>
        ) : null}
        <span>{content}</span>
        <span className="msg-footer-time">
          {moment(timestamp).format("LT")}
        </span>
      </p>
    </div>
  );
};
export default Content;
