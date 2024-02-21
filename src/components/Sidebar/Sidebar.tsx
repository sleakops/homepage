import {
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  ButtonProps,
} from "@chakra-ui/react";
import React, { FC } from "react";
import Link from "next/link";
import { INavbarLink } from "constants/types";
import { Logo } from "../";
import { navbarButtons, navbarLinks } from "constants/navbarLinks";

type TNavButtonProps = ButtonProps & INavbarLink;

const NavButton: FC<TNavButtonProps> = (props: TNavButtonProps) => {
  const { href, label, ...buttonProps } = props;
  return (
    <Link href={href} passHref>
      <Button variant="ghost-on-accent" justifyContent="start" {...buttonProps}>
        <HStack spacing="3">
          <Text color="on-accent-subtle">{label}</Text>
        </HStack>
      </Button>
    </Link>
  );
};

const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-accent"
      color="on-accent"
      maxW={{ base: "full", sm: "xs" }}
      py={{ base: "6", sm: "8" }}
      px={{ base: "4", sm: "6" }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: "5", sm: "6" }} shouldWrapChildren>
          <Logo />
          <Stack spacing="1">
            {navbarLinks.concat(navbarButtons).map((link: INavbarLink) => (
              <NavButton label={link.label} href={link.href} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);

export default Sidebar;
