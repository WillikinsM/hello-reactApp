import img from "../../assets/intro-connection-light.jpg";

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
export default Home;
