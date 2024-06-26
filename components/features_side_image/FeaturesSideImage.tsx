import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import Link from "next/link";
import { features } from "./data";

export const FeaturesSideImage = () => (
  <Box as="section" bg="bg-surface">
    <Container py={{ base: "16", md: "24" }}>
      <Stack spacing={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "4", md: "5" }} maxW="3xl">
          <Stack spacing="3">
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="semibold"
              color="accent"
            >
              Benefits
            </Text>
            <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
              {/* Built By Craftech */}
              Unlock the Potential
            </Heading>
          </Stack>
          <Text color="muted" fontSize={{ base: "lg", md: "xl" }}>
            You can get your Infra running in the Cloud without losing control.
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "12", lg: "16" }}
        >
          <Stack
            spacing={{ base: "10", md: "12" }}
            maxW="xl"
            justify="center"
            width="full"
          >
            {features.map((feature) => (
              <Stack key={feature.name} spacing="4" direction="row">
                <Square
                  size={{ base: "10", md: "12" }}
                  bg="accent"
                  color="inverted"
                  borderRadius="lg"
                >
                  <Icon as={feature.icon} boxSize={{ base: "5", md: "6" }} />
                </Square>
                <Stack
                  spacing={{ base: "4", md: "5" }}
                  pt={{ base: "1.5", md: "2.5" }}
                >
                  <Stack spacing={{ base: "1", md: "2" }}>
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      fontWeight="medium"
                    >
                      {feature.name}
                    </Text>
                    <Text color="muted">{feature.description}</Text>
                  </Stack>
                  {/* <Button
                    variant="link"
                    colorScheme="blue"
                    rightIcon={<FiArrowRight fontSize="1.25rem" />}
                    alignSelf="start"
                  >
                    Read more
                  </Button> */}
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Box width="full" overflow="hidden">
            <Image
              maxW="100%"
              minH={{ base: "100%", lg: "560px" }}
              objectFit="cover"
              src="/images/sleakops2.png"
              alt="Developer"
            />
          </Box>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
