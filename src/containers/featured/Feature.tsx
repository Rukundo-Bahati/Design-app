import { Card, Link, Stack } from "@chakra-ui/react";

import './feature.css'

const Feature = () => {
  const featuresBg = {
    background: "var(--color-light)",
    padding: "1rem",
    color: "var(--color-apps)",
    listStyleType: "none",
    justifyContent: "space-evenly",
    borderRadius: "6px",
    fontSize: "1.2rem",
  };

  return (
    <Card bg="var(--bg-features)" padding="2rem" margin="2rem 0" className="card" m='1rem'>
      <Stack direction="row" style={featuresBg}>
        <Link href="behance.net" isExternal>Behance</Link>
        <Link href="https://clutch.co/" isExternal>Clutch</Link>
        <Link href="https://dribbble.com/" isExternal>Dribble</Link>
        <Link href="https://discord.com/" isExternal>Discord</Link>
      </Stack>
    </Card>
  );
};

export default Feature;
