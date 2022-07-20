const Image = (props) => {
  const { src } = props.src;

  const srcImage = `${window.location.origin}/${src}`;
  return <img src={srcImage} {...props} />;
};
export default Image;
