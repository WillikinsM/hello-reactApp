
import Contacts from "./contacts";
import Chat from "./chat";
import "./index.scss";

const Messages = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Contacts />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Messages;
