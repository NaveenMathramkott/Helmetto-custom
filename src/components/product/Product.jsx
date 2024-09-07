import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SeoHelmet from "../SeoHelmet";
import Layout from "../../layouts/Layout";
import BreadcrumbWrap from "../BreadcrumbWrap";
import ProductImageDescription from "./ProductImageDescription";
import ProductDescriptionTab from "./ProductDescriptionTab";
import RelatedProductSlider from "./RelatedProductSlider";

const Product = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find((product) => product.id === id);

  return (
    <Fragment>
      <SeoHelmet
        titleTemplate="Product Page"
        description="Product Page of helmetto helmets"
      />

      <Layout headerTop="visible">
        {/* breadcrumb */}
        <BreadcrumbWrap
          pages={[
            { label: "Home", path: "/" },
            { label: "Shop Product", path: pathname },
          ]}
        />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />

        {/* product description tab */}
        {/* <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
        /> */}

        {/* related product slider */}
        {/* <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category[0]}
        /> */}
      </Layout>
    </Fragment>
  );
};

export default Product;
