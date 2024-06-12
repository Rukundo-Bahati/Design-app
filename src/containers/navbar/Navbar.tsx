import { Link, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import "./navbar.css";

const Navbar = () => {
  const [navColor, setNavColor] = useState("");

  const listStyles = {
    listStyleType: "none",
    gap: "2rem",
    fontSize: "1.2rem",
    display: "flex",
    fontWeight: "500",
    color: "var(--color-link)",
  };

  const h1Styles = {
    fontSize: "2rem",
    fontWeight: "bolder",
    background: "var(--color-logo)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavColor("#fff");
      } else {
        setNavColor("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Stack
      direction={isMobile ? "column" : "row"} // Change direction based on breakpoint
      justifyContent="space-between"
      style={{
        position: "sticky",
        top: "0",
        zIndex: 100,
        backgroundColor: navColor,
        padding: "1rem",
        width: "100%",
      }}
    >
      <Link href="#home">
        <h1 style={h1Styles}>LOGO</h1>
      </Link>
      {!isMobile && (
        <ul style={listStyles}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#projects">Inquiry</a>
          </li>
          <li>
            <a href="#about">Join Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </Stack>
  );
};

export default Navbar;
