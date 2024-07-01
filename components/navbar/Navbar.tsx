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
import * as React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ToggleButton } from "./ToggleButton";
import { Sidebar } from "./Sidebar";

import { Logo } from "./Logo";
import Link from "next/link";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box as="section">
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="12" justifyContent="space-between">
            <HStack spacing="8">
              <Link href="/" passHref>
                <a>
                  <Logo />
                </a>
              </Link>
              {isDesktop && (
                <>
                  <ButtonGroup variant="link" spacing="8">
                    {/* <Link href="/pricing" passHref>
                      <Button>Pricing</Button>
                    </Link> */}
                    <Link href="/contact" passHref>
                      <Button>Contact</Button>
                    </Link>
                    <Link href="https://docs.sleakops.com" passHref>
                      <Button>
                        Docs
                        <Icon as={ExternalLinkIcon} ml={2} />
                      </Button>
                    </Link>
                  </ButtonGroup>
                </>
              )}
            </HStack>

            {isDesktop && (
              <HStack spacing="4">
                <HStack spacing="3">
                  <Link href="https://console.sleakops.com/login" passHref>
                    <Button variant="ghost">Sign in</Button>
                  </Link>
                </HStack>
                <HStack spacing="3">
                  <Link href="/bookdemo" passHref>
                    <Button variant="primary">Request Demo</Button>
                  </Link>
                  
                </HStack>
              </HStack>
            )}

            {!isDesktop && (
            // ) : (
              <>
                <ToggleButton
                  isOpen={isOpen}
                  aria-label="Open Menu"
                  onClick={onToggle}
                />
                <Drawer
                  isOpen={isOpen}
                  placement="left"
                  onClose={onClose}
                  isFullHeight
                  preserveScrollBarGap
                  // Only disabled for showcase
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
