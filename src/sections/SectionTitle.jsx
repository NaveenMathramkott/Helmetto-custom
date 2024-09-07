import PropTypes from "prop-types";

const SectionTitle = ({ titleText }) => {
  return (
    <div className="section-title-4">
      <h3 className="bg-gray-5">{titleText}</h3>
    </div>
  );
};

SectionTitle.propTypes = {
  sectionTitle: PropTypes.string,
};

export default SectionTitle;
