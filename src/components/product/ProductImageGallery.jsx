import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const ProductImageGallery = ({ product }) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);
  const slides = product?.image?.map((img, i) => ({
    src: img,
    key: i,
  }));

  // const thumbnailSwiperParams = {
  //   onSwiper: setThumbsSwiper,
  //   spaceBetween: 10,
  //   slidesPerView: 4,
  //   touchRatio: 0.2,
  //   freeMode: true,
  //   loop: true,
  //   slideToClickedSlide: true,
  //   navigation: true,
  // };

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
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
        {product?.image?.length ? (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            rewind
            parallax
          >
            {product.image.map((single, key) => (
              <SwiperSlide key={key}>
                {/* <button
                  className="lightgallery-button"
                  onClick={() => setIndex(key)}
                >
                  <i className="pe-7s-expand1"></i>
                </button> */}
                <div className="single-image">
                  <img src={single} className="img-fluid" alt="" />
                </div>
              </SwiperSlide>
            ))}
            <AnotherLightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={slides}
              plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </Swiper>
        ) : null}
      </div>
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.shape({}),
};

export default ProductImageGallery;
