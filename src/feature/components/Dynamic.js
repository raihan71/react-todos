const Dynamic = ({ as = 'h1', children, ...props }) => {
  const As = as;
  return <As {...props}>{children}</As>;
};

export default Dynamic;