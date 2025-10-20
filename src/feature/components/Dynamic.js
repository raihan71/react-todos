import PropTypes from "prop-types";

const Dynamic = ({ as = "h1", children, ...props }) => {
  const As = as;
  return <As {...props}>{children}</As>;
};

Dynamic.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Dynamic;
