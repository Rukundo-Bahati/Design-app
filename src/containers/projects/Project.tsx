import { Grid, Stack } from "@chakra-ui/react";
import CustomCard from "../../components/Card";

import "./project.css";

const Project = () => {
  const featuresBg = {
    background: "var(--bg-features)",
    margin: "2rem 0",
    padding: "1rem",
    color: "var(--color-link)",
    listStyleType: "none",
    justifyContent: "space-evenly",
    borderRadius: "6px",
    fontSize: "1.2rem",
  };
  return (
    <Stack
      id="projects"
      style={{
        padding: "1rem",
      }}
      // width={{base: '50%'}}
      // display={{base:'flex'}}
      // justifyContent={{base:'center'}}
    >
      <Stack direction="row" style={featuresBg} className="works">
        <li>UI/UX DESIGNS</li>
        <li>LOGO DESIGN</li>
        <li>BRAND DESIGN</li>
        <li>GRAPHIC DESIGN</li>
      </Stack>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
        <CustomCard bg={"var(--color-card-header)"} />
        <CustomCard bg={" var(--bg-container)"} />
        <CustomCard bg={"var(--color-card-header)"} />
      </Grid>
    </Stack>
  );
};

export default Project;
