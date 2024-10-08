import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeroSLiderSingleView = ({ data }) => {
  return (
    <div
      className="single-slider-2 slider-height-2 d-flex align-items-center bg-img"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-12 ms-auto">
            <div className="slider-content-2 slider-animated-1">
              <h3 className="animated no-style">{data.title}</h3>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <div className="slider-btn slider-btn--style2 btn-hover">
                <Link className="animated rounden-btn" to={data.url}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSLiderSingleView.propTypes = {
  data: PropTypes.shape({}),
};

export default HeroSLiderSingleView;
