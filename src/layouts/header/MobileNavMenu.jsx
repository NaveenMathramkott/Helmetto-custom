import { Link } from "react-router-dom";

const MobileNavMenu = () => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={"/"}>{"home"}</Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={"/"}>{"home_group_one"}</Link>
              <ul className="sub-menu">
                <li>
                  <Link to={"/home-fashion"}>{"home_fashion"}</Link>
                </li>

                <li>
                  <Link to={"/home-furniture-four"}>
                    {"home_furniture_four"}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Link to={"/shop-grid-standard"}>{"collection"}</Link>
        </li>

        <li>
          <Link to={"/contact"}>{"contact_us"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
