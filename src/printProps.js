//Higher-order components follow below naming convention
//A function that takes Component as an argument
export const printProps = (Component) => {
  return (props) => {
    console.log("props ->", props);
    return <Component {...props} />;
  };
};
