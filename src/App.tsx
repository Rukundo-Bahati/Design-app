import {
  Navbar,
  Header,
  Feature,
  Join,
  Projects,
  Contact,
  Footer,
  Template,
} from "./containers/index";
import { Stack } from "@chakra-ui/react";
import "./App.css";

const App = () => {
  return (
    <Stack
      className="app"
      // spacing={{ base: "4", md: "8" }}
      // padding={{ base: "4", md: "8" }}
    >
      <Navbar />
      <Stack flex="1">
        <Header />
        <Template heading="Featured on" content={<Feature />} />
        <Join />
        <Template heading="Previous Works" content={<Projects />} />
        <Template heading="Reach Us" content={<Contact />} />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default App;
