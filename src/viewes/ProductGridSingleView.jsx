import PropTypes from "prop-types";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDiscountPrice } from "../helpers/product";
import { addToCart } from "../store/slices/cart-slice";
import ProductModal from "../components/product/ProductModal";

const ProductGridSingleView = ({
  product,
  cartItem,
  spaceBottomClass,
  colorClass,
  titlePriceClass,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = product?.price?.toFixed(2);
  const finalDiscountedPrice = discountedPrice?.toFixed(2);
  const dispatch = useDispatch();

  return (
    <>
      <div className={clsx("product-wrap-2", spaceBottomClass, colorClass)}>
        <div className="product-img">
          <Link to={"/product/" + product.id}>
            <img className="default-img" src={product.image[0]} alt="" />
            {product.image.length > 1 ? (
              <img className="hover-img" src={product.image[1]} alt="" />
            ) : (
              ""
            )}
          </Link>
          {product.discount || product.new ? (
            <div className="product-img-badges">
              {product.discount ? (
                <span className="pink">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.new ? <span className="purple">New</span> : ""}
            </div>
          ) : (
            ""
          )}

          <div className="product-action-2">
            {product.affiliateLink ? (
              <a
                href={product.affiliateLink}
                rel="noopener noreferrer"
                target="_blank"
                title="Buy now"
              >
                {" "}
                <i className="fa fa-shopping-cart"></i>{" "}
              </a>
            ) : product.variation && product.variation.length >= 1 ? (
              <Link to={`/product/${product.id}`} title="Select options">
                <i className="fa fa-cog"></i>
              </Link>
            ) : product.stock && product.stock > 0 ? (
              <button
                onClick={() => dispatch(addToCart(product))}
                className={
                  cartItem !== undefined && cartItem.quantity > 0
                    ? "active"
                    : ""
                }
                disabled={cartItem !== undefined && cartItem.quantity > 0}
                title={cartItem !== undefined ? "Added to cart" : "Add to cart"}
              >
                {" "}
                <i className="fa fa-shopping-cart"></i>{" "}
              </button>
            ) : (
              <button disabled className="active" title="Out of stock">
                <i className="fa fa-shopping-cart"></i>
              </button>
            )}

            <button onClick={() => setModalShow(true)} title="Quick View">
              <i className="fa fa-eye"></i>
            </button>
          </div>
        </div>
        <div className="product-content-2">
          <div
            className={`title-price-wrap-2 ${
              titlePriceClass ? titlePriceClass : ""
            }`}
          >
            <h3>
              <Link to={"/product/" + product.id}>{product.name}</Link>
            </h3>
            <div className="price-2">
              {discountedPrice !== null ? (
                <>
                  <span>{"₹" + finalDiscountedPrice}</span>{" "}
                  <span className="old">{"₹" + finalProductPrice}</span>
                </>
              ) : (
                <span>{"₹" + finalProductPrice} </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedPrice={discountedPrice}
        finalProductPrice={finalProductPrice}
        finalDiscountedPrice={finalDiscountedPrice}
      />
    </>
  );
};

ProductGridSingleView.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  titlePriceClass: PropTypes.string,
};

export default ProductGridSingleView;
