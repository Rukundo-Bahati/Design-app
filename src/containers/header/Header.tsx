import { Box, Grid, GridItem } from "@chakra-ui/react";
import headerImage from "../../assets/header-image.png";

const Header = () => {
  const paragraphStyle = {
    color: "var(--color-heading)",
    fontSize: "3.4rem",
  };

  return (
    <Grid 
    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}
    margin="2rem 0" id="home"  p='1rem'>
      <GridItem>
        <Box display={{base: 'flex', md: 'block',
        }} justifyContent='center'>
        <img src={headerImage} alt="Header" />
        </Box>
      </GridItem>
      <GridItem>
        <p style={paragraphStyle}>
          ABC Web Designs - Crafting visually stunning websites for businesses.
        </p>
      </GridItem>
    </Grid>
  );
};

export default Header;
