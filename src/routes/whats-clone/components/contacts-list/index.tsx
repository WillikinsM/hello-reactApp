/* eslint-disable jsx-a11y/anchor-is-valid */
import { observer } from "mobx-react-lite";
import Contact from "./contact";
import { useMStore } from "../../../../stores";
import "./index.scss";

const ContactsList = observer(() => {
  const messageStore = useMStore("messageStore");

  if (messageStore.markerContact === false) {
    messageStore.retriveContact();
  }

  return (
    <>
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white ">
        <header className="contact-head">
          <div className="header-img">
            <img
              src="https://avatars.githubusercontent.com/u/41803028?v=4"
              alt="my profile pic"
              className="avatar"
            ></img>
            <b className="esemibold">BETA</b>
          </div>
          <div className="util-icons">
            <span>
              <i className="bi bi-plus-circle"></i>
              <i className="bi bi-chat-left-text-fill"></i>
              <i className="bi bi-three-dots-vertical"></i>
            </span>
          </div>
        </header>

        <div className="search-wrapper">
          <div className="search-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="search-icon"
            >
              <path
                fill="currentColor"
                d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
              ></path>
            </svg>

            <div className="search__back-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
                ></path>
              </svg>
            </div>
          </div>

          <input
            className="input-search"
            placeholder="Search or start a new chat"
          ></input>
        </div>

        <div className="side-contact-list ">
          {messageStore.contactList.map((contact: any, index) => (
            <Contact
              key={index}
              user={contact.user}
              content={contact.content}
              timestamp={contact.timestamp}
              group={contact.group}
              id={contact.id}
            />
          ))}
        </div>
      </div>
    </>
  );
});
export default ContactsList;
