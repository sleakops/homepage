import React, { FC } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Icon,
} from "@chakra-ui/react";
import { navbarLinks, navbarButtons } from "constants/navbarLinks";
import { INavbarLink } from "constants/types";
import { ToggleButton, Logo } from "../";
import { OPEN_MENU } from "constants/consts";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Sidebar } from "../";

const Navbar: FC<{}> = (props) => {
  const {} = props;
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box as="section">
      <Box
        as="nav"
        bg="bg-surface"
        // position="fixed"
        // top="0"
        // left="0"
        // right="0"
        // zIndex="10"
        // boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="12" justifyContent="space-between">
            <HStack spacing="8">
              <Link style={{ cursor: 'pointer' }} href={'/'} passHref>
                <Logo />
              </Link>
              {isDesktop && (
                <ButtonGroup variant="link" spacing="8">
                  {navbarLinks.map((link: INavbarLink) =>
                    link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>
                          {link.label}
                          <Icon as={ExternalLinkIcon} ml={2} />
                        </Button>
                      </a>
                    ) : (
                      <Link href={link.href} passHref>
                        <Button>{link.label}</Button>
                      </Link>
                    )
                  )}
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop && (
              <HStack spacing="4">
                {navbarButtons.map((button: INavbarLink) =>
                  button.isExternal ? (
                    <a
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant={button.variant}>{button.label}</Button>
                    </a>
                  ) : (
                    <Link href={button.href} passHref>
                      <Button variant={button.variant}>{button.label}</Button>
                    </Link>
                  )
                )}
              </HStack>
            )}
            {!isDesktop && (
              <>
                <ToggleButton
                  isOpen={isOpen}
                  aria-label={OPEN_MENU}
                  onClick={onToggle}
                />
                <Drawer
                  isOpen={isOpen}
                  placement="left"
                  onClose={onClose}
                  isFullHeight
                  preserveScrollBarGap
                  trapFocus={false}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <Sidebar />
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
