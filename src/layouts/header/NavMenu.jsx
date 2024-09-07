import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={clsx(
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      )}
    >
      <nav>
        <ul>
          {/* <li>
            <Link to={"/"}>
              {"home"}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
          </li> */}
          {/* collection section ----------------- */}
          <li>
            <Link to={"/configurator"}>{"Customize"}</Link>
          </li>
          <li>
            <Link to={"/collection"}>{"collection"}</Link>
          </li>
          {/* collection section ----------------- */}

          {/* <li>
            <Link to={"/"}>
              {"pages"}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={"/cart"}>{"cart"}</Link>
              </li>
              <li>
                <Link to={"/checkout"}>{"checkout"}</Link>
              </li>
              <li>
                <Link to={"/wishlist"}>{"wishlist"}</Link>
              </li>
            </ul>
          </li> */}

          <li>
            <Link to={"/contact"}>{"contact"}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
