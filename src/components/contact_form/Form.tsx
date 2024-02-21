import { Box, Container, Stack, StackDivider, Text } from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Container py={{ base: '4', md: '8' }}>
    <Stack spacing="5" divider={<StackDivider />}>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '5', lg: '8' }}
        justify="space-between"
      >
        <Box flexShrink={0}>
          <Text fontSize="lg" fontWeight="medium">
            Address
          </Text>
          <Text color="muted" fontSize="sm">
            Your address to which we send your orders
          </Text>
        </Box>
      </Stack>

      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '5', lg: '8' }}
        justify="space-between"
      >
        <Box flexShrink={0}>
          <Text fontSize="lg" fontWeight="medium">
            Your Profile
          </Text>
          <Text color="muted" fontSize="sm">
            Tell others who you are
          </Text>
        </Box>
      </Stack>
    </Stack>
  </Container>
)