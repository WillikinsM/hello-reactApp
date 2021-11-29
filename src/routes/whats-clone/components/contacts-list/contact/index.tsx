import { observer } from "mobx-react-lite";
import moment from "moment";
import { useMStore } from "../../../../../stores";

interface Props {
  user: string;
  content: string;
  timestamp: string;
  group: boolean;
  id: number;
}

const Contact = observer(({ user, content, timestamp, group, id }: Props) => {
  const messageStore = useMStore("messageStore");
  let img = "https://avatars.githubusercontent.com/u/41803028?v=4";
  if (group) {
    img = "https://reactjs.org/logo-og.png";
  } else if (id === 2) {
    img =
      "https://cdn.icon-icons.com/icons2/2630/PNG/512/avatar_woman_people_girl_glasses_icon_159125.png";
  } else if (id === 3) {
    img = "https://cdn-icons-png.flaticon.com/512/53/53060.png";
  }

  return (
    <div
      className="contact"
      aria-current="true"
      onClick={() => messageStore.setChatId(id)}
    >
      <div className="contacts-avatar">
        <img src={img} alt="contact progile pic" className="avatar" />
      </div>

      <div className="contact-content">
        <div className="contact-top-content">
          <h2 className="contact-name">
            {group === true ? "React Group" : user}
          </h2>
          <span className="time-tick">{moment(timestamp).format("dddd")}</span>
        </div>
        <div className="contact-bottom-content">
          <p className="message-wrapper">
            <span className="last-message">{content}</span>
          </p>
          <div className="content-icons">
            <span aria-label="contact-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 20"
                width="19"
                height="20"
                className="sidebar-contact-icon"
              >
                <path
                  fill="currentColor"
                  d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
