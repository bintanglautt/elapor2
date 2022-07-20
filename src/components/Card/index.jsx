const Card = ({ children }) => {
  return (
    <>
      <div className="container my-5 w-75">
        <div className="card">
          <div className="card-body">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
