import {
  Box,
  Container,
  Heading,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Accordion } from "components";
import { FC } from "react";

const Faqs: FC<{}> = () => {
  return (
    <Box as="section" >
      <Container py={{ base: "8", md: "16" }}>
        <Stack spacing={{ base: "8", md: "16" }}>
          <Heading textAlign="center" size={useBreakpointValue({ base: "sm", md: "md" })}>
            FAQs
          </Heading>
          <Accordion />
        </Stack>
      </Container>
    </Box>
  );
};

export default Faqs;
