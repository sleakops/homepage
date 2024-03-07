import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FC } from "react";

const PlansContact: FC<{}> = () => {
  const headingSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Box as="section" bg="bg-surface">
      <Container py={{ base: "16", md: "32" }}>
        <Stack spacing={{ base: "8", md: "16" }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            // justify="center"
            // align="center"
            wrap="wrap"
            // p={{ base: 8, md: 16 }}
          >
            <Box flex="1"  paddingRight={20}>
              <Heading m='0' size={useBreakpointValue({ base: "sm", md: "md" })}>
                Which plan is right for your business?
              </Heading>
              <Text color={mode("gray.600", "gray.400")} mt="5" fontSize="xm">
                Set a meeting with a product expert and we’ll take some time to
                learn about your business requirements before recommending the
                best-fit solution.
              </Text>
            </Box>
            <Box
              flex="1"
              p={5}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
              m={{ base: 4, md: 0 }}
            >
              <Flex as="form" direction="column" gridGap={3}>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder="First" />
                </FormControl>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Last" />
                </FormControl>
                {/* Repite FormControl para los otros campos... */}
                <Checkbox defaultChecked>
                  Receive product updates, news and insights.
                </Checkbox>
                <Button mt={4} colorScheme="blue" type="submit">
                  Submit
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default PlansContact;
