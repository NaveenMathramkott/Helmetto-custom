import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import BreadcrumbWrap from "../components/BreadcrumbWrap";
import { postData } from "../axios/axiosApi";
import { useDispatch } from "react-redux";
import { authFailure, authSuccess } from "../store/slices/auth-slice";
import SeoHelmet from "../components/SeoHelmet";
import Layout from "../layouts/Layout";

const LoginRegister = () => {
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await postData(`/api/v1/auth/login`, {
        password: userPassword,
        email: userEmail,
      });

      if (res && res.data.success) {
        const { user, token } = res.data;
        // const authData = { user, token };
        // localStorage.setItem("user", JSON.stringify(authData));
        dispatch(authSuccess({ user, token }));
      } else {
        console.log(`Login `, res);
      }
    } catch (error) {
      dispatch(authFailure(error.response?.data?.message || error.message));
    }
  };

  const onRegister = async (event) => {
    event.preventDefault();
    try {
      const res = await postData(`/api/v1/auth/register`, {
        password: userPassword,
        email: userEmail,
        name: userName,
        address: userAddress,
        answer: "football",
        admin: false,
      });
      if (res && res.data.success) {
        const { user, token } = res.data;
        // const authData = { user, token };
        // localStorage.setItem("user", JSON.stringify(authData));
        dispatch(authSuccess({ user, token }));
      } else {
        console.log(`Login `, res);
      }
    } catch (error) {
      dispatch(authFailure(error.response?.data?.message || error.message));
    }
  };

  return (
    <Fragment>
      <SeoHelmet titleTemplate="Login" description="Helmetto custom helmets" />
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <BreadcrumbWrap
          pages={[
            { label: "Home", path: "/" },
            {
              label: "Login Register",
              path: pathname,
            },
          ]}
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={onLogin}>
                              <input
                                type="email"
                                name="user-email"
                                placeholder="Email"
                                value={userEmail}
                                onChange={(event) =>
                                  setUserEmail(event.target.value)
                                }
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={userPassword}
                                onChange={(event) =>
                                  setUserPassword(event.target.value)
                                }
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={"/auth"}>Forgot Password?</Link>
                                </div>
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={onRegister}>
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Username"
                                value={userName}
                                onChange={(event) =>
                                  setUserName(event.target.value)
                                }
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={userPassword}
                                onChange={(event) =>
                                  setUserPassword(event.target.value)
                                }
                              />
                              <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                                value={userEmail}
                                onChange={(event) =>
                                  setUserEmail(event.target.value)
                                }
                              />
                              <input
                                name="user-address"
                                placeholder="Address"
                                type="text"
                                value={userAddress}
                                onChange={(event) =>
                                  setUserAddress(event.target.value)
                                }
                              />

                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default LoginRegister;
