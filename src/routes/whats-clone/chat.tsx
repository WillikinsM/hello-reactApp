const Chat = () => {
  return (
    <>
      <div className="col py-3">
        <div className="chat-wrapper">
          <div className="chat-body">
            <div className="chat-background"></div>
            <header className="chat-header">
              <div className="contacts-avatar">
                <img
                  src="https://github.com/mdo.png"
                  alt="contact name"
                  className="avatar"
                />
              </div>
              <div className="header-contact-info">
                <h2 className="contact-name">Contato 1</h2>
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
            <div className="chat-content">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <footer className="chat-footer">
              <span className="chat-scroll" aria-label="scroll down">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 20"
                  width="19"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"
                  ></path>
                </svg>
              </span>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
