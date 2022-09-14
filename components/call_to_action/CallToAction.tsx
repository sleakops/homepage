import { Box, Button, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'

export const CallToAction = () => (
  <Box as="section" bg="bg-accent" color="on-accent">
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing={{ base: '8', md: '10' }}>
        <Stack spacing={{ base: '4', md: '5' }} align="center">
          <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>Let's Talk</Heading>
          <Text color="on-accent-muteed" maxW="2xl" textAlign="center" fontSize="xl">
            Unleash the full potential of your app and manage your infra efficiently
          </Text>
        </Stack>
        <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">
          {/* <Button variant="secondary-on-accent" size="lg">
            Learn more
          </Button> */}
          <Button variant="primary-on-accent" size="lg">
            BOOK A DEMO
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
