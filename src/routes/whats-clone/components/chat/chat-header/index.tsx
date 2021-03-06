import { observer } from "mobx-react-lite";
import { useMStore } from "../../../../../stores";
import "./index.scss";

const Header = observer(() => {
  const messageStore = useMStore("messageStore");

  let username: any = messageStore.contactList;

  let img = "https://avatars.githubusercontent.com/u/41803028?v=4";

  if (username[messageStore.chatId - 1].group === true) {
    img = "https://reactjs.org/logo-og.png";
  } else if (username[messageStore.chatId - 1].id === 2) {
    img =
      "https://cdn.icon-icons.com/icons2/2630/PNG/512/avatar_woman_people_girl_glasses_icon_159125.png";
  } else if (username[messageStore.chatId - 1].id === 3) {
    img = "https://cdn-icons-png.flaticon.com/512/53/53060.png";
  }

  return (
    <header className="chat-head">
      <div className="contacts-avatar">
        <img src={img} alt="contact name" className="avatar" />
      </div>
      <div className="header-contact-info">
        <h2 className="contact-name">
          {username[messageStore.chatId - 1].group === true
            ? "React Group"
            : username[messageStore.chatId - 1].user}
        </h2>
        <p className="contact-status">Online</p>
      </div>
      <div className="header-icons">
        <span className="icon-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="chat-action-icon"
          >
            <path
              fill="currentColor"
              d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
            ></path>
          </svg>
        </span>
        <span className="icon-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="chat-action-icon"
          >
            <path
              fill="currentColor"
              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
            ></path>
          </svg>
        </span>
      </div>
    </header>
  );
});

export default Header;
