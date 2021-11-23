import Header from "./components/chat-header";
import Messages from "./components/chat-messages";
import Footer from "./components/chat-footer";

const Chat = () => {
  return (
    <>
      <div className="col py-3">
        <div className="chat-wrapper">
          <div className="chat-body">
            <div className="chat-background"></div>
            <Header />
            <Messages />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
