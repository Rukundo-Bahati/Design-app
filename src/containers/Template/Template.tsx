interface TemplateProps {
  heading: string;
  content: React.ReactNode; 
}

const Template: React.FC<TemplateProps> = ({ heading, content }) => {
  const styleHeading: React.CSSProperties = {
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
