import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProducts } from "../../helpers/product";
import ProductGridSingleView from "../../viewes/ProductGridSingleView";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const ProductGrid = ({
  spaceBottomClass,
  colorClass,
  titlePriceClass,
  category,
  type,
  limit,
}) => {
  const { products } = useSelector((state) => state.product);

  const { cartItems } = useSelector((state) => state.cart);
  const prods = getProducts(products, category, type, limit);

  if (!prods?.length) return <p>No products found</p>;

  return (
    <Swiper
      className="position-static"
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
    >
      {prods.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductGridSingleView
            spaceBottomClass={spaceBottomClass}
            colorClass={colorClass}
            product={product}
            cartItem={cartItems.find((cartItem) => cartItem.id === product.id)}
            titlePriceClass={titlePriceClass}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

ProductGrid.propTypes = {
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  titlePriceClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number,
};

export default ProductGrid;
