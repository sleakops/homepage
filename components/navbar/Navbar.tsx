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
} from '@chakra-ui/react'
import * as React from 'react'
import { ToggleButton } from './ToggleButton'
import { Sidebar } from './Sidebar'

import { Logo } from './Logo'
import Link from 'next/link'

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <Box as="section">
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Link href="/" passHref>
              <a href="/">
                <Logo />
              </a>
            </Link>
            {isDesktop ? (
              <>
                <ButtonGroup variant="link" spacing="8">
                  {/* <Button>How it works</Button> */}
                  <Link href="/" passHref>
                    <Button>Home</Button>
                  </Link>
                  <Link href="/contact" passHref>
                    <Button>Contact</Button>
                  </Link>
                  <Link href="https://docs.sleakops.com" passHref>
                    <Button>Docs</Button>
                  </Link>
                </ButtonGroup>
                <HStack spacing="3">                
                <Link href="https://console.sleakops.com/login" passHref>
                  <Button variant="ghost">Login</Button>
                </Link>
                  {/* <Button variant="primary">Sign up</Button> */}
                </HStack>
              </>
            ) : (
              <>
                <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
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
  )
}
