import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/slices/auth-slice";

const MobileNavMenu = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        {token ? (
          <>
            <li>
              <Link to={"/profile"}>My account</Link>
            </li>
            <li>
              <Link to={"/"} onClick={() => dispatch(logout())}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to={"/auth"}>Login</Link>
          </li>
        )}

        <li>
          <Link to={"/configurator"}>{"Customize"}</Link>
        </li>
        <li>
          <Link to={"/collection"}>{"collection"}</Link>
        </li>

        <li>
          <Link to={"/contact"}>{"contact_us"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
