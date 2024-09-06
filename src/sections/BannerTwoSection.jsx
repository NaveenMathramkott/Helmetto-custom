import PropTypes from "prop-types";
import clsx from "clsx";
import bannerTwoData from "../data/bannerTwoData.json";
import BannerTwoSingleView from "../viewes/BannerTwoSingleView";

const BannerSixteen = ({ spaceBottomClass, spaceTopClass }) => {
  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      <div className="row no-gutters">
        {bannerTwoData?.map((single, key) => (
          <div className="col-lg-6 col-md-6" key={key}>
            <BannerTwoSingleView data={single} spaceBottomClass="mb-30" />
          </div>
        ))}
      </div>
    </div>
  );
};

BannerSixteen.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default BannerSixteen;
