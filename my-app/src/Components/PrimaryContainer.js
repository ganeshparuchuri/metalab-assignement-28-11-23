const PrimaryContainer = ({ children }) => {
  return (
    <div className="mainclass">
      <div className="header-class">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Contact</h4>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default PrimaryContainer;
