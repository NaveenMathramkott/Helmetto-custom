import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountDownTimer";

const CountDownSection = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage,
}) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-6 order-1 order-lg-2">
            <div className="funfact-content funfact-res text-center">
              <h2>Deal of the day</h2>
              <div className="timer">
                <CountdownTimer date={dateTime} />
              </div>
              <div className="funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover">
                <Link to={"/shop-grid-standard"}>SHOP NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 order-2 order-lg-1">
            <div className="funfact-image">
              <Link to={"/shop-grid-standard"}>
                <img src={countDownImage} alt="" className="img-fluid" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownSection.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default CountDownSection;
