import PropTypes from "prop-types";

const RenderName = (props) => {
  const { name = "Zach" } = props;

  return <div>{name}</div>;
};

// PropTypes were deprecated in April 2017 (v15.5.0).
RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};

// defaultProps is removed from function components in place of ES6 default parameters. Class components will continue to support defaultProps.
RenderName.defaultProps = {
  name: "Zach",
};

export default RenderName;
