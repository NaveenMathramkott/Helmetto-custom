import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerTwoSingleView = ({ data, spaceBottomClass }) => {
  return (
    <div
      className={clsx(
        "single-banner-2",
        spaceBottomClass,
        data.textAlign === "right" && "align_right"
      )}
    >
      <Link to={data.link}>
        <img src={data.image} alt="" />
      </Link>
      <div className="banner-content-2 banner-content-2--style2">
        <h3>{data.title}</h3>
        <h4>
          {data.subtitle} <span>{data.price}</span>
        </h4>
        <Link to={data.link}>
          <i className="fa fa-long-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

BannerTwoSingleView.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
};

export default BannerTwoSingleView;
