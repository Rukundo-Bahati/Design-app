import { Link, Stack } from "@chakra-ui/react";
import XIcon from "@mui/icons-material/X";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import './footer.css'

const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      bgColor="var(--color-heading)"
      padding="0.7rem"
      // width="100%"
    >
      <Stack className="left" margin="1rem 0 0 0">
        <h2>
          MANAGED BY <br /> FRONT FOCUS
        </h2>
        <h3>Copyright 2024 All Rights Reserved</h3>
      </Stack>
      <div className="right">
        <h2>About Us</h2>
        <Stack
          className="icons"
          direction="row"
          justifyContent="space-evenly"
          margin="1rem 0 0 0"
        >
          <Link className="link" href="https://x.com" isExternal>
            <XIcon />
          </Link>
          <Link  className="link" href="https://x.com" isExternal>
            <LocalPhoneIcon />
          </Link>
          <Link  className="link" href="https://instagram.com" isExternal>
            <InstagramIcon />
          </Link>
          <Link  className="link" href="https://www.whatsapp.com/" isExternal>
            <WhatsAppIcon />
          </Link>
          <Link  className="link" href="https://linkedin.com" isExternal>
            <LinkedInIcon />
          </Link>
          <Link  className="link" href="https://gmail.com" isExternal>
            <MailOutlineIcon />
          </Link>
        </Stack>
      </div>
    </Stack>
  );
};

export default Footer;
