import Layout from "../layouts/Layout";
import SeoHelmet from "../components/SeoHelmet";
import HeroSliderSection from "../sections/HeroSliderSection";
import BannerSection from "../sections/BannerSection";
import CountDownSection from "../sections/CountDownSection";
import FeatureIconSection from "../sections/FeatureIconSection";
import TabProductSection from "../sections/TabProductSection";
import BannerTwoSection from "../sections/BannerTwoSection";
import NewsletterSection from "../sections/NewsletterSection";

const HomePage = () => {
  return (
    <>
      <SeoHelmet titleTemplate="Homepage" description="helmets collections" />
      <Layout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderSection />

        {/* banner */}
        <BannerSection spaceTopClass="pt-10" spaceBottomClass="pb-85" />

        {/* countdown */}
        <CountDownSection
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          dateTime="September 13, 2024 12:12:00"
          countDownImage="https://res.cloudinary.com/dqibvgjoz/image/upload/v1724909176/banner04_yxvpmi.png"
        />

        {/* feature icon */}
        <FeatureIconSection
          bgImg="/assets/img/bg/shape.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />

        {/* tab product */}
        <TabProductSection
          category="furniture"
          spaceTopClass="pt-95"
          sectionTitle="Best Products"
        />

        {/* banner */}
        <BannerTwoSection spaceTopClass="pt-95" />

        {/* newsletter */}
        <NewsletterSection
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="dark-red-subscribe"
        />
      </Layout>
    </>
  );
};

export default HomePage;
