import img from "../../../../assets/intro-connection-light.jpg";
import Header from "./chat-header";
import Footer from "./chat-footer";
import Messages from "./chat-messages";
import "./index.scss";

const Users = [
  {
    id: 1,
    name: "John Doe",
    dates: {
      "04/06/2021": [
        {
          content: "mesage 1",
          sender: 1,
          time: "08:11",
        },
        {
          content: "message 2",
          sender: null,
          time: "08:15",
        },
        {
          content: "message 3",
          sender: 1,
          time: "09:11",
        },
        {
          content: "message 2",
          sender: null,
          time: "09:15",
        },
      ],
      TODAY: [
        {
          content: "mesage 1",
          sender: 1,
          time: "08:11",
        },
        {
          content: "message 2",
          sender: null,
          time: "08:15",
        },
        {
          content: "message 3",
          sender: 1,
          time: "09:11",
        },
        {
          content: "message 2",
          sender: null,
          time: "09:15",
        },
      ],
      YESTERDAY: [
        {
          content: "mesage 1",
          sender: 1,
          time: "08:11",
        },
        {
          content: "message 2",
          sender: null,
          time: "08:15",
        },
        {
          content: "message 3",
          sender: 1,
          time: "09:11",
        },
        {
          content: "message 2",
          sender: null,
          time: "09:15",
        },
      ],
    },
  },
];

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
