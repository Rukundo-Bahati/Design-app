import {
  Card,
  Stack,
  FormControl,
  Input,
  Textarea,
  Button,
  FormHelperText,
  useBreakpointValue,
} from "@chakra-ui/react";

import "./contact.css";
import { useState } from "react";

const Contact = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    if (name === "firstName") setFirstName(value);
    else if (name === "lastName") setLastName(value);
    else if (name === "email") setEmail(value);
    else if (name === "tel") setTel(value);
  };

  const isFormValid = firstName !== "" && lastName !== "" && email !== "" && tel !== "";
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  const widthCard = useBreakpointValue({ base: "100%", md: "50%" })

  return (
 

    <div id="contact">
      <Card
        direction={{ base: "column", sm: "row" }}
        style={{
          width:`${widthCard}`

        }}
        overflow="hidden"
        variant="outline"
        height="27rem"
      
        display="flex"
        justifyContent="center"
        alignItems="center"
        background="var(--bg-contact)"
        className="card"
      >
        <form onSubmit={handleSubmit}>


        <Stack>
          <Stack direction="row" margin="2rem 0">
            <div className="left">
              <FormControl >
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  color="var(--color-heading)"
                  bgColor="var(--color-light)"
                  value={firstName}
                  onChange={handleInputChange}
                />
               
              </FormControl>

              <FormControl >
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  color="var(--color-heading)"
                  bgColor="var(--color-light)"
                  value={lastName}
                  onChange={handleInputChange}
                />
               
              </FormControl>
            </div>

            <div className="right">
              <FormControl >
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  color="var(--color-heading)"
                  bgColor="var(--color-light)"
                  value={email}
                  onChange={handleInputChange}
                />
           
              </FormControl>

              <FormControl >
                <Input
                  type="tel"
                  placeholder="Tel"
                  color="var(--color-heading)"
                  bgColor="var(--color-light)"
                  name="tel"
                  value={tel}
                  onChange={handleInputChange}
                />
             
              </FormControl>
            </div>
          </Stack>

          <Stack
            direction="column"
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <Textarea
              style={{
                resize: "none",
              }}
              placeholder="Enter your message here ..."
              bgColor="var(--color-light)"
            />
            <Button colorScheme="blue" width="30%"  type="submit" isDisabled = {!isFormValid}>
              Send
            </Button>

            {!isFormValid && (
              <FormControl>
              <FormHelperText color='red'>
                Please fill out all fields.
              </FormHelperText>
              </FormControl>
            )}
          </Stack>
        </Stack>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
