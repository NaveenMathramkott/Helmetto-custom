import { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BreadcrumbWrap from "../components/BreadcrumbWrap";
import SeoHelmet from "../components/SeoHelmet";
import Layout from "../layouts/Layout";
import toast from "react-hot-toast";
import { getData, postData } from "../axios/axiosApi";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllFromCart } from "../store/slices/cart-slice";
import DropIn from "braintree-web-drop-in-react";
import { getDiscountPrice } from "../helpers/product";

const PaymentPage = () => {
  let cartTotalPrice = 0;
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientToken, setClientToken] = useState("");

  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await postData(`/api/v1/order/braintree/payment`, {
        nonce,
        cartItems,
        id: user?._id,
      });
      setLoading(false);
      dispatch(deleteAllFromCart());
      navigate("/profile");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getToken = async () => {
    try {
      const { data } = await getData(`/api/v1/order/braintree/token`);
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [token]);

  const getTotal = () => {
    cartItems.forEach((cartItem) => {
      const discountedPrice = getDiscountPrice(
        cartItem.price,
        cartItem.discount
      );
      const finalProductPrice = cartItem?.price.toFixed(2);
      const finalDiscountedPrice = discountedPrice?.toFixed(2);

      discountedPrice != null
        ? (cartTotalPrice +=
            finalDiscountedPrice * cartItem.quantity +
            (cartItem?.custom ? cartItem?.custom : 0))
        : (cartTotalPrice +=
            finalProductPrice * cartItem.quantity +
            (cartItem?.custom ? cartItem?.custom : 0));
    });
  };
  getTotal();

  return (
    <Fragment>
      <SeoHelmet
        titleTemplate="payment"
        description="Stripe payment for Helmetto"
      />
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <BreadcrumbWrap
          pages={[
            { label: "Home", path: "/" },
            { label: "Payment", path: pathname },
          ]}
        />
        <div className="col-lg-4 col-md-12 mx-auto my-5">
          <div className="grand-totall">
            <div className="title-wrap">
              <h4 className="cart-bottom-title section-bg-gary-cart">
                Order Summary
              </h4>
            </div>

            <h4 className="grand-totall-title" style={{ marginTop: "10px" }}>
              Grand Total <span>{"₹" + cartTotalPrice.toFixed(2)}</span>
            </h4>
            <div>
              {token ? (
                <>
                  {!clientToken || !token || !cartItems?.length ? (
                    ""
                  ) : (
                    <div id="payment-screen-wrapper">
                      <DropIn
                        options={{
                          authorization: clientToken,
                          paypal: {
                            flow: "vault",
                          },
                        }}
                        onInstance={(instance) => {
                          setInstance(instance);
                        }}
                      />

                      <Link
                        onClick={handlePayment}
                        disabled={loading || !instance}
                        style={{
                          backgroundColor:
                            loading || !instance ? "gray" : "#ffcc00",
                          opacity: loading || !instance ? 0.2 : 1,
                        }}
                      >
                        {loading ? "Processing ...." : "Prceed Payment"}
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => navigate("/login", { state: "/payment" })}
                >
                  Please Login to Checkout
                </button>
              )}
            </div>

            {/* <Link>Proceed to Checkout</Link> */}
          </div>
        </div>
        <div className="cart-container-right"></div>
      </Layout>
    </Fragment>
  );
};

export default PaymentPage;
