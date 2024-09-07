import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const ProductImageGalleryLeftThumb = ({ product, thumbPosition }) => {
  const [index, setIndex] = useState(-1);
  const slides = product?.image.map((img, i) => ({
    src: img,
    key: i,
  }));

  return (
    <Fragment>
      <div className="row row-5 test">
        <div
          className={clsx(
            thumbPosition && thumbPosition === "left"
              ? "col-xl-10 order-1 order-xl-2"
              : "col-xl-10"
          )}
        >
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
                {product?.image.map((single, key) => (
                  <SwiperSlide key={key}>
                    <button
                      className="lightgallery-button"
                      onClick={() => setIndex(key)}
                    >
                      <i className="pe-7s-expand1"></i>
                    </button>
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
        </div>
        <div
          className={clsx(
            thumbPosition && thumbPosition === "left"
              ? "col-xl-2 order-2 order-xl-1"
              : "col-xl-2"
          )}
        >
          <div className="product-small-image-wrapper product-small-image-wrapper--side-thumb">
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
                    <div className="single-image">
                      <img src={single} className="img-fluid" alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductImageGalleryLeftThumb.propTypes = {
  product: PropTypes.shape({}),
  thumbPosition: PropTypes.string,
};

export default ProductImageGalleryLeftThumb;
