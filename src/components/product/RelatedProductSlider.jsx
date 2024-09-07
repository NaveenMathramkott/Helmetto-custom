import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProducts } from "../../helpers/product";
import SectionTitle from "../../sections/SectionTitle";
import ProductGridSingleView from "../../viewes/ProductGridSingleView";

const settings = {
  loop: false,
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

const RelatedProductSlider = ({ spaceBottomClass, category }) => {
  const { products } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const prods = getProducts(products, category, null, 6);

  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
      <div className="container">
        <SectionTitle
          titleText="Related Products"
          positionClass="text-center"
          spaceClass="mb-50"
        />
        {prods?.length ? (
          <Swiper options={settings}>
            {prods.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductGridSingleView
                  product={product}
                  cartItem={cartItems.find(
                    (cartItem) => cartItem.id === product.id
                  )}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

RelatedProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default RelatedProductSlider;
