import PropTypes from "prop-types";
import { Fragment } from "react";
import ShopTopAction from "./ShopTopAction";

const ShopTopBar = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount,
}) => {
  return (
    <Fragment>
      {/* shop top action */}
      <ShopTopAction
        getLayout={getLayout}
        getFilterSortParams={getFilterSortParams}
        productCount={productCount}
        sortedProductCount={sortedProductCount}
      />
    </Fragment>
  );
};

ShopTopBar.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number,
};

export default ShopTopBar;
