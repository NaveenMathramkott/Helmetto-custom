import PropTypes from "prop-types";
import clsx from "clsx";

const FooterNewsLetter = ({
  spaceBottomClass,
  spaceLeftClass,
  sideMenu,
  colorClass,
  widgetColorClass,
}) => {
  return (
    <div
      className={clsx(
        "footer-widget",
        spaceBottomClass,
        sideMenu ? "ml-ntv5" : spaceLeftClass,
        widgetColorClass
      )}
    >
      <div className="footer-title">
        <h3>SUBSCRIBE</h3>
      </div>
    </div>
  );
};

FooterNewsLetter.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  colorClass: PropTypes.string,
  widgetColorClass: PropTypes.string,
};

export default FooterNewsLetter;
