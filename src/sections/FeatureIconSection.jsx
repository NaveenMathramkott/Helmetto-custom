import PropTypes from "prop-types";
import clsx from "clsx";
import featureIconData from "../data/featureIconData.json";
import FeatureIconSingleView from "../viewes/FeatureIconSingleView";

const FeatureIconSection = ({
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  gutterClass,
  responsiveClass,
  bgImg,
}) => {
  return (
    <div
      className={clsx(
        "support-area hm9-section-padding",
        spaceTopClass,
        spaceBottomClass,
        responsiveClass
      )}
      style={bgImg ? { backgroundImage: `url(${bgImg})` } : {}}
    >
      <div className={clsx(containerClass, gutterClass)}>
        <div className="row">
          {featureIconData?.map((single, key) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={key}>
              <FeatureIconSingleView data={single} spaceBottomClass="mb-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FeatureIconSection.propTypes = {
  bgImg: PropTypes.string,
  containerClass: PropTypes.string,
  gutterClass: PropTypes.string,
  responsiveClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default FeatureIconSection;
