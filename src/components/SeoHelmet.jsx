import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SeoHelmet = ({ title, titleTemplate, description }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {title} | {titleTemplate}
        </title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

SeoHelmet.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
};

SeoHelmet.defaultProps = {
  title: "Helmetto",
  titleTemplate: "Product Page",
  description: "Product page of Helmetto",
};

export default SeoHelmet;
