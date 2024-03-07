import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  VStack,
  HStack,
  Icon,
  Container,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FC } from "react";
import { WrapperPage } from "components";
import { PRICING, PRICING_DESCRIPTION, PRICING_TITLE } from "constants/consts";

const DemoRequested: FC<{}> = () => {
  return (
    <Box as="section" bg="bg-surface">
      <Container py={{ base: "8", md: "16" }}>
        <Stack spacing={{ base: "8", md: "16" }}>
          <VStack spacing={4} align="flex-start">
            <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
              Smart move.
            </Heading>
            <Text>
              We’ll be contacting you shortly. Check your inbox for your
              confirmation email.
            </Text>
            <Box>
              <HStack spacing={1}>
                <Text>🚀</Text>
                <Text fontWeight="semibold">Next up:</Text>
              </HStack>
              <VStack mt="4" align="flex-start" pl={6}>
                <Link
                  isExternal
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe1N2iQ6oL4UX03R4M4wZjOLUM_yBWezd-ug3iM97RE4By-Xg/viewform"
                  color="accent"
                >
                  1. Submit your intake form
                </Link>
                <Link
                  isExternal
                  href="https://www.linkedin.com/company/craftech-io/"
                  color="accent"
                >
                  2. Follow us on LinkedIn
                </Link>
                <Link
                  isExternal
                  href="https://www.youtube.com/@craftech-io"
                  color="accent"
                >
                  3. Check out our YouTube Videos
                </Link>
              </VStack>
            </Box>
            <Text>We look forward to working with you.</Text>
            <Stack
              spacing={{ base: "4", md: "5" }}
              align="center"
              py={{ base: "8", md: "16" }}
            >
              <Stack spacing="3">
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="semibold"
                  color="accent"
                >
                  Let's we know
                </Text>
                <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
                  Watch our Product Overview Video
                </Heading>
                <Box
                  position="relative"
                  maxW={1022}
                  w="100%"
                  overflow="hidden"
                  borderRadius="lg"
                >
                  <iframe
                    style={{ marginTop: 20 }}
                    width="1022"
                    height="575"
                    src="https://www.youtube.com/embed/skqFl6ze7Go"
                    title="SleakOps Product Overview | CloudOps Automation Platform"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </Box>
              </Stack>
            </Stack>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default DemoRequested;
