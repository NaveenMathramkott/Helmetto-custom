import PropTypes from "prop-types";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductGridListSingle from "./ProductGridListSingle";

const ProductGridList = ({ products, spaceBottomClass }) => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Fragment>
      {products?.map((product) => {
        return (
          <div className="col-xl-4 col-sm-6" key={product.id}>
            <ProductGridListSingle
              spaceBottomClass={spaceBottomClass}
              product={product}
              cartItem={cartItems.find(
                (cartItem) => cartItem.id === product.id
              )}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

ProductGridList.propTypes = {
  products: PropTypes.array,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridList;
