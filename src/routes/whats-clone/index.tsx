import { Chat, Home } from "./components/chat";
import Contacts from "./components/contacts";
import "./index.scss";

const contactMsg = [
  {
    user: "Stefanie",
    timestamp: "2021/11/23 02:19:57",
    self: true,
    type: "text",
    id: 1,
    content: "Dolor dolore ullamco pariatur dolor occaecat est.",
    replyto: 2,
    group: false,
  },
  {
    user: "Sophia",
    timestamp: "2021/11/23 11:55:00",
    self: true,
    type: "text",
    id: 2,
    content:
      "Ea fugiat do proident occaecat labore reprehenderit commodo duis duis qui tempor aute ex nostrud.",
    replyto: 2,
    group: false,
  },
  {
    user: "Hurley",
    timestamp: "2021/11/24 11:37:43",
    self: true,
    type: "text",
    id: 1,
    content:
      "Voluptate laborum consectetur ut quis labore irure laborum aliquip veniam velit aliqua cupidatat.",
    replyto: 2,
    group: false,
  },
  {
    user: "Ayala",
    timestamp: "2021/11/25 22:23:40",
    self: false,
    type: "text",
    id: 1,
    content: "Commodo cupidatat excepteur do laborum magna.",
    replyto: 2,
    group: false,
  },
  {
    user: "Latasha",
    timestamp: "2021/11/25 06:32:22",
    self: true,
    type: "text",
    id: 3,
    content:
      "Eiusmod qui amet veniam incididunt eiusmod nostrud pariatur aliqua.",
    replyto: 2,
    group: false,
  },
  {
    user: "Armstrong",
    timestamp: "2021/11/23 22:05:07",
    self: true,
    type: "text",
    id: 2,
    content:
      "Aute ad reprehenderit culpa Lorem cupidatat officia reprehenderit eiusmod pariatur occaecat cillum.",
    replyto: 2,
    group: false,
  },
  {
    user: "Minnie",
    timestamp: "2021/11/23 15:23:59",
    self: false,
    type: "text",
    id: 1,
    content: "Consequat laboris officia aliqua in.",
    replyto: 2,
    group: false,
  },
];

const groupMsg = [
  {
    timestamp: "2021/11/23 11:09:09",
    self: true,
    type: "text",
    id: 1,
    user: "Dena",
    content:
      "Non id anim Lorem cillum commodo laborum amet sunt labore adipisicing.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/25 19:02:25",
    self: true,
    type: "text",
    id: 3,
    user: "Nellie",
    content: "Amet duis culpa amet consequat sunt in.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/22 02:47:57",
    self: false,
    type: "text",
    id: 3,
    user: "Luann",
    content: "Anim elit nisi enim reprehenderit.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/23 00:44:07",
    self: false,
    type: "text",
    id: 3,
    user: "Gray",
    content: "Deserunt in eiusmod cillum nisi nulla deserunt adipisicing.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/24 12:21:59",
    self: true,
    type: "text",
    id: 4,
    user: "Briggs",
    content:
      "Deserunt excepteur cillum ullamco aliqua labore velit tempor dolor commodo ea.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/22 12:23:59",
    self: false,
    type: "text",
    id: 4,
    user: "Lynette",
    content:
      "Labore dolore voluptate nulla dolore velit ullamco tempor eiusmod id adipisicing velit et in ipsum.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/25 21:12:02",
    self: true,
    type: "text",
    id: 2,
    user: "Prince",
    content:
      "Cillum commodo amet labore irure reprehenderit enim magna adipisicing aliquip officia mollit nulla eu.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/24 11:45:17",
    self: false,
    type: "text",
    id: 2,
    user: "Leonor",
    content: "Aliquip cupidatat sunt commodo commodo Lorem quis commodo.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/24 09:54:16",
    self: true,
    type: "text",
    id: 3,
    user: "Bond",
    content: "Consequat dolore minim nostrud elit duis ullamco.",
    replyto: 2,
    group: true,
  },
];

const Messages = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Contacts  />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Messages;
