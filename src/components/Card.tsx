import {
  Card as ChakraCard,
  Stack,
  Heading,
  Text,
  Button,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AiOutlineShop } from "react-icons/ai";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import './card.css'

const CustomCard = ({ bg }: { bg: string }) => {
  const rotationAngle = useBreakpointValue({ base: "-55deg", md: "-44deg" })
  const rotationWidth = useBreakpointValue({ base: "203%", md: "220%" })

  return (
    <div>
      <ChakraCard
        width="96%"
        height="450px"
        background="var( --bg-card)"
        borderRadius="0 2rem 0"
        margin="1rem"
        position="relative"
        overflow="hidden"
        className="card"
      >
        <Stack direction="row" height="100%">
          <div
            style={{
              flex: 1,
              height: "100%",
              position: "relative",
              gap: "3rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${rotationWidth}`,
                height: "100%",
                overflow: "hidden",
              }}
            >delete my project 
              <div
                style={{
                  width: "125%",
                  height: "200%",
                  background: `${bg}`,
                  transform: `rotate(${rotationAngle})`,
                  transformOrigin: "bottom left",
                }}
              />
            </div>
            <div
              style={{
                zIndex: 1,
                padding: "1rem",
                position: "relative",
              }}
            >
              <Text margin="3.6rem 0 0 -0.3rem">
                Shop the <br /> World's <br /> marketplace <br /> for your money
              </Text>
              <Text fontSize="0.8rem" margin="2rem 0">
                Access your desires in one single online application anywhere.
                Start Today. What do you need?
              </Text>
              <Button>SHOP NOW</Button>
            </div>
          </div>
          <div style={{ flex: 1, height: "100%" }}>
            <Stack
              mt="9"
              spacing="3"
              height="100%"
              position="absolute"
              right="5px"
              color="var(--color-heading)"
              textAlign="center"
              zIndex={2}
            >
              <Heading size="lg">SELLILO</Heading>
              <Text fontSize="1.6rem">
                Online Shopping <br /> Site
              </Text>
              <Icon as={AiOutlineShop} boxSize={8} marginLeft="5rem" />
            </Stack>
          </div>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          height="60px"
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              margin: "1rem ",
            }}
          >
            <h2>&copy;Copyright 2024</h2>
            <p>All rights Reserved</p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              margin: " 0 1rem 0 0 ",
            }}
          >
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </Stack>
      </ChakraCard>
    </div>
  );
};

export default CustomCard;
