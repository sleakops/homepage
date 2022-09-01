import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { features } from './data'

export const FeaturesList = () => (
  <Box as="section" bg="bg-surface">
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing={{ base: '12', md: '16' }}>
        <Stack spacing={{ base: '4', md: '5' }} align="center" textAlign="center">
          <Stack spacing="3">
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="accent">
              Features
            </Text>
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
              SleakOps, encontraste tu solución!
            </Heading>
          </Stack>
          <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
            Estas son las principales características que nuestra plataforma ofrece. Para conocer todos los detalles técnicos te recomendamos seguir por aca.
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} columnGap={8} rowGap={{ base: 10, md: 16 }}>
          {features.map((feature) => (
            <Stack
              key={feature.name}
              spacing={{ base: '4', md: '5' }}
              align="center"
              textAlign="center"
            >
              <Square
                size={{ base: '10', md: '12' }}
                bg="accent"
                color="inverted"
                borderRadius="lg"
              >
                <Icon as={feature.icon} boxSize={{ base: '5', md: '6' }} />
              </Square>
              <Stack spacing={{ base: '1', md: '2' }}>
                <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">
                  {feature.name}
                </Text>
                <Text color="muted">{feature.description}</Text>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
)
