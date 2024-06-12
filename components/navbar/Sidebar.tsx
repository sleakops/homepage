import {
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  ButtonProps,
  As,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FiBarChart2,
  FiBookmark,
  FiCheckSquare,
  FiHome,
  FiUsers,
} from 'react-icons/fi'
import { Logo } from './Logo'
import Link from 'next/link'

interface NavButtonProps extends ButtonProps {
  href: string,
  label: string
}

const NavButton = (props: NavButtonProps) => {
  const { href, label, ...buttonProps } = props
  return (
    <Link href={href} passHref >
      <Button variant="ghost-on-accent" justifyContent="start" {...buttonProps}>
        <HStack spacing="3">
          {/* <Icon as={icon} boxSize="6" color="on-accent-subtle" /> */}
          <Text color="on-accent-subtle">{label}</Text>
        </HStack>
      </Button>
    </Link>
  )
}

export const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-accent"
      color="on-accent"
      maxW={{ base: 'full', sm: 'xs' }}
      py={{ base: '6', sm: '8' }}
      px={{ base: '4', sm: '6' }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <Logo />
          <Stack spacing="1">
            <NavButton label="Home" href="/" />
            {/* <NavButton label="How it works" href="/" /> */}
            <NavButton label="Pricing" href="/pricing" />
            <NavButton label="Contact" href="/contact" />
            <NavButton label="Docs" href="https://docs.sleakops.com" />
            <NavButton label="Sign in" href="https://console.sleakops.com/login" />
            <NavButton label="Request Demo" href="https://console.sleakops.com/login" />
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  </Flex>
)