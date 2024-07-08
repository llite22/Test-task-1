import BitcoinIcon from "./assets/icons/Bitcoin.svg?react";
import EthereumIcon from "./assets/icons/Ethereum.svg?react";
import LitecoinIcon from "./assets/icons/Litecoin.svg?react";
import GooglePlayIcon from "./assets/icons/googleplay.svg?react";
import AppstoreIcon from "./assets/icons/appstore.svg?react";
import Avatar1Icon from "./assets/icons/avatar1.svg?react";
import Avatar2Icon from "./assets/icons/avatar2.svg?react";
import Avatar3Icon from "./assets/icons/avatar3.svg?react";
import Avatar4Icon from "./assets/icons/avatar4.svg?react";
import { CardReview } from "./components/CardReview";

const App = () => {
  return (
    <section className="container">
      <div className="content">
        <div className="title">
          <h1 className="title__text">
            Do you want to Learn more About cryptocurrencies
            <span className="title__text__span"> quickly and easily ?</span>
          </h1>
          <p className="text__subscribe">
            Subscribe to our channel to learn more
          </p>
          <div className="text__block">
            <div>
              <h1 className="stat__number">20k+</h1>
              <p className="stat__label">subscribers</p>
            </div>
            <div>
              <h1 className="stat__number">19,5K</h1>
              <p className="stat__label">successful cases</p>
            </div>
            <div>
              <h1 className="stat__number">4.8/5</h1>
              <p className="stat__label">rating</p>
            </div>
          </div>
          <button>Join Whatsapp</button>
          <div className="icons__block">
            <div className="app__block">
              <GooglePlayIcon width={24} height={24} />
              <div>
                <h5>get it on</h5>
                <h3>Google Play</h3>
              </div>
            </div>
            <div className="app__block">
              <AppstoreIcon width={24} height={24} />
              <div>
                <h5>Available on the</h5>
                <h3>App Store</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="review__1">
          <CardReview
            image={<Avatar1Icon width={48} height={48} />}
            username={"Lorenzo"}
            handle={"@lorenzo"}
            reviewText={
              "Amazing Telegram bot! Provides real-time crypto prices and news"
            }
          />
        </div>
        <div className="review__2">
          <CardReview
            image={<Avatar2Icon width={48} height={48} />}
            username={"Adalina"}
            handle={"@ada"}
            reviewText={
              "Must-have bot for crypto traders. Accurate signals and analysis"
            }
          />
        </div>
        <div className="review__3">
          <CardReview
            image={<Avatar3Icon width={48} height={48} />}
            username={"Alexander"}
            handle={"@alex_x"}
            reviewText={
              "Superb cryptocurrency bot! Quick updates and reliable data"
            }
          />
        </div>
        <div className="review__4">
          <CardReview
            image={<Avatar4Icon width={48} height={48} />}
            username={"Rushana"}
            handle={"@Hana"}
            reviewText={
              "Efficient and user-friendly bot. Simplifies crypto trading tasks"
            }
          />
        </div>
        <div className="icons">
          <BitcoinIcon width={312} height={352} className="bitcoin" />
          <LitecoinIcon width={312} height={324} className="litecoin" />
          <EthereumIcon width={312} height={408} className="ethereum" />
        </div>
      </div>
    </section>
  );
};

export default App;
