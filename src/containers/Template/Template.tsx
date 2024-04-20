const Template = ({ heading, content }) => {
  const styleHeading = {
    color: "var(--color-heading)",
    fontSize: "1.4rem",
    textAlign: "center",
  };

  return (
    <div>
      <h1 style={styleHeading}>{heading}</h1>
      <div
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
      >
        {content}
      </div>
    </div>
  );
};

export default Template;
