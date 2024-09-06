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
          <li>
            <Link to={import.meta.env.VITE_PUBLIC_KEY + "/"}>
              {"home"}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
          </li>
          {/* collection section ----------------- */}
          <li>
            <Link to={import.meta.env.VITE_PUBLIC_KEY + "/collection"}>
              {"collection"}
            </Link>
          </li>
          {/* collection section ----------------- */}

          <li>
            <Link to={import.meta.env.VITE_PUBLIC_KEY + "/"}>
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
                <Link to={import.meta.env.VITE_PUBLIC_KEY + "/cart"}>
                  {"cart"}
                </Link>
              </li>
              <li>
                <Link to={import.meta.env.VITE_PUBLIC_KEY + "/checkout"}>
                  {"checkout"}
                </Link>
              </li>
              <li>
                <Link to={import.meta.env.VITE_PUBLIC_KEY + "/wishlist"}>
                  {"wishlist"}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to={import.meta.env.VITE_PUBLIC_KEY + "/contact"}>
              {"contact_us"}
            </Link>
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
