import PropTypes from "prop-types";
import clsx from "clsx";
import bannerData from "../data/bannerData.json";
import BannerSingleView from "../viewes/BannerSingleView";

const BannerFifteen = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={clsx(
        "banner-area banner-area-2",
        spaceTopClass,
        spaceBottomClass
      )}
    >
      <div className="container-fluid">
        <div className="custom-row-2">
          {bannerData?.map((single, key) => (
            <div className="col-xl-4 col-md-6" key={key}>
              <BannerSingleView spaceBottomClass="mb-10" data={single} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BannerFifteen.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default BannerFifteen;
