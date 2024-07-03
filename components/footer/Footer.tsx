import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from './Logo'
import Link from 'next/link'

export const Footer = () => (
  <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
    <Stack spacing={{ base: '4', md: '3' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="tertiary">
          <IconButton as="a" aria-label="LinkedIn" icon={<FaLinkedin />} 
            href="https://www.linkedin.com/company/sleakops/" />
          <IconButton as="a" aria-label="Instagram" icon={<FaInstagram />} 
            href="https://www.instagram.com/sleakops/" />
          <IconButton as="a" aria-label="Twitter" icon={<FaFacebook />} 
            href="https://www.facebook.com/profile.php?id=61560524351952" />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle">
        <Link
          href="https://craftech.notion.site/Terms-Conditions-efb8d9a980654625af456732ed44b197"
          passHref
        >
          <a target="_blank">Terms & Conditions</a>
        </Link>
        {" - "}
        <Link
          href="https://craftech.notion.site/Privacy-Policy-of-SleakOps-55b977da50d84871809879d065b16b3b"
          passHref
        >
          <a target="_blank">Privacy Policy</a>
        </Link>
        <br/>
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
)