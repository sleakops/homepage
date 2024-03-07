import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "./Logo";
import Link from "next/link";

const Footer = () => (
  <Container as="footer" role="contentinfo">
    <Stack
      spacing="8"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      py={{ base: "12", md: "16" }}
    >
      <Stack spacing={{ base: "6", md: "8" }} align="start">
        <Logo />
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
    >
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} SleakOps. All rights reserved. &nbsp;
        {/* <Link href="/privacy-policy" passHref>
          <a>Privacy and Policy</a>
        </Link> */}
      </Text>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="https://www.linkedin.com/company/craftech-io/"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
      </ButtonGroup>
    </Stack>
  </Container>
);

export default Footer;
