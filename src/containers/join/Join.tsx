import { Button, Grid, GridItem, HStack, Stack, Box } from "@chakra-ui/react";
import joinImage from "../../assets/join-image.png";

const Join = () => {
  const paragraphStyle = {
    color: "var(--color-heading)",
    fontSize: "3.4rem",
    padding: '1rem'
  };

  return (
    <div id="about">
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} 
        gap={4}
        margin="2rem 0" 
        id="home" 
      >
        <GridItem>
          <p style={paragraphStyle}>
            Boost your productivity by joining us. Take the next step today!
          </p>

          <Stack width="44%" direction="row" margin="3rem 0 0 6rem">
            <HStack
              spacing="4"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                style={{
                  color: "var(--color-heading)",
                }}
                variant="outline"
                colorScheme="var(--border-button)"
                width="100%"
              >
                Order
              </Button>
              <Button
                style={{
                  background: "var(--bg-button)",
                  color: "var(--color-heading)",
                }}
                variant="outline"
                colorScheme="var(--color-heading)"
                width="100%"
              >
                Read
              </Button>
            </HStack>
          </Stack>
        </GridItem>
        <GridItem>
          {/* Center the image on small screens */}
          <Box display={{ base: "flex", md: "block" }} justifyContent="center">
            <img src={joinImage} alt="Header" />
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Join;
