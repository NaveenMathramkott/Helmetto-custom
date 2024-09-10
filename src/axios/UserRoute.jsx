import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import { getData } from "./axiosApi";

const UserRoute = () => {
  const [ok, setOk] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const authCheck = async () => {
    const res = await getData(`/api/v1/auth/user-auth`, {
      headers: {
        Authorization: token,
      },
    })
      .then((result) => result)
      .catch((error) => error);
    if (res?.data?.success) {
      setOk(true);
    } else {
      setOk(false);
    }
  };
  useEffect(() => {
    if (token) authCheck();
  }, [token]);
  return ok ? <Outlet /> : <Spinner />;
};

export default UserRoute;
