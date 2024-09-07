import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { getDiscountPrice } from "../../helpers/product";
import ProductImageGallerySideThumb from "./ProductImageGallerySideThumb";
import ProductImageFixed from "./ProductImageFixed";
import ProductImageGallery from "./ProductImageGallery";
import ProductDescriptionInfo from "./ProductDiscriptionInfo";

const ProductImageDescription = ({
  spaceTopClass,
  spaceBottomClass,
  galleryType,
  product,
}) => {
  const { cartItems } = useSelector((state) => state.cart);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +product?.price.toFixed(2);
  const finalDiscountedPrice = +discountedPrice?.toFixed(2);
  return (
    <div className={clsx("shop-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {galleryType === "leftThumb" ? (
              <ProductImageGallerySideThumb
                product={product}
                thumbPosition="left"
              />
            ) : galleryType === "rightThumb" ? (
              <ProductImageGallerySideThumb product={product} />
            ) : galleryType === "fixedImage" ? (
              <ProductImageFixed product={product} />
            ) : (
              <ProductImageGallery product={product} />
            )}
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <ProductDescriptionInfo
              product={product}
              discountedPrice={discountedPrice}
              finalDiscountedPrice={finalDiscountedPrice}
              finalProductPrice={finalProductPrice}
              cartItems={cartItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductImageDescription.propTypes = {
  galleryType: PropTypes.string,
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default ProductImageDescription;
