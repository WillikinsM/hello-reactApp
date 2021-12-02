import moment from "moment";
import classnames from "classnames";

interface Props {
  content: string;
  timestamp: string;
  self: boolean;
  group: boolean;
  user: string;
  type: string;
}

const Content = ({ content, timestamp, self, group, user, type }: Props) => {
  const messageClass = classnames({
    "chat-msg": type === "text",
    "chat-img-msg": type === "img",
    "msg-rec": !self,
    "msg-send": self,
  });

  if (type === "text") {
    return (
      <div className="chat-msg-wrapper">
        <p className={messageClass}>
          {group && !self ? (
            <small className="chat-contact-name">{user}</small>
          ) : null}
          <span>{content}</span>
          <span className="msg-footer-time">
            {moment(new Date(timestamp)).format("LT")}
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="chat-img-wrapper">
        <p className={messageClass}>
          {group && !self ? (
            <small className="chat-contact-name">{user}</small>
          ) : null}
          <img src={content} alt="" className="chat-img" />
          <span className="msg-footer-time">
            {moment(new Date(timestamp)).format("LT")}
          </span>
        </p>
      </div>
    );
  }
};
export default Content;
