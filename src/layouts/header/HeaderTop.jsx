import PropTypes from "prop-types";
import clsx from "clsx";

const HeaderTop = ({ borderStyle }) => {
  return (
    <div
      className={clsx(
        "header-top-wap",
        borderStyle === "fluid-border" && "border-bottom"
      )}
    >
      <div>Welcome to Helmetto Estore</div>
      <div className="header-offer">
        <p>
          Free delivery on order over <span>₹ 1099</span>
        </p>
      </div>
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
};

export default HeaderTop;
