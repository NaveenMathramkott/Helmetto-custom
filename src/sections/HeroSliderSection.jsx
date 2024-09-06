import sliderData from "../data/sliderData.json";
import HeroSLiderSingleView from "../viewes/HeroSliderSingleView";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const HeroSliderSection = () => {
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        {sliderData && (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            rewind
            parallax
          >
            {sliderData?.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSLiderSingleView data={single} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSliderSection;
