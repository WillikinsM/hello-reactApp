import img from "../../../../assets/intro-connection-light.jpg";
import Header from "./chat-header";
import Footer from "./chat-footer";
import Messages from "./chat-messages";
import "./index.scss";
import { observer } from "mobx-react-lite";
import { useMStore } from "../../../../stores";

const Chat = observer(() => {
  const messageStore = useMStore("messageStore");
  messageStore.retriveMessage(messageStore.chatId);

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
});

const Home = () => {
  return (
    <>
      <div className="col py-3">
        <div className="chat-home">
          <div className="home-image-wrapper">
            <img
              src={img}
              alt="keeep your phone conected"
              className="home-img"
            />
          </div>
          <h1 className="home-title">Keep your phone connected</h1>
          <p className="home-text">
            WhatsApp connects to your phone to sync messages. To reduce data
            usage, connect your phone to Wi-Fi.
          </p>
        </div>
      </div>
    </>
  );
};
export { Home, Chat };
