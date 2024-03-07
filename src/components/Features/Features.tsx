import React, { FC } from 'react';
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
import { IFeature, features } from '../../constants/features';
import { DISCOVER_SLEAKOPS, FEATURES } from '../../constants/consts';

const Features: FC = () => (
  <Box as="section" bg="bg-surface">
    <Container py={{ base: '16', md: '32' }}>
      <Stack spacing={{ base: '8', md: '16' }}>
        <Stack spacing={{ base: '4', md: '5' }} align="center" textAlign="center">
          <Stack spacing="3">
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="accent">
              { FEATURES }
            </Text>
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
              { DISCOVER_SLEAKOPS }
            </Heading>
          </Stack>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} columnGap={8} rowGap={{ base: 10, md: 16 }}>
          {features.map((feature: IFeature) => (
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
);

export default Features;
