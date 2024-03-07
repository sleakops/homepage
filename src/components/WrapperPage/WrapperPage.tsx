import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
	useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface IWrapperPage {
  header: string;
  title: string;
	description?: string;
	children?: ReactNode;
};

const WrapperPage: FC<IWrapperPage> = (props: IWrapperPage) => {
  const { header, title, children, description } = props;
  return (
    <Box as="section" bg="bg-surface">
      <Container py={{ base: "8", md: "16" }}>
        <Stack spacing={{ base: "8", md: "16" }}>
          <Stack
            spacing={{ base: "4", md: "5" }}
            align="center"
            textAlign="center"
          >
            <Stack spacing="3">
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="semibold"
                color="accent"
              >
                {header}
              </Text>
              <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
                {title}
              </Heading>
							<Text color={mode("gray.600", "gray.400")} mt="5" fontSize="xm">
								{description}
							</Text>
            </Stack>
          </Stack>
          <Stack
          spacing={{ base: "4", md: "5" }}
          align="center"
          textAlign="center"
          >
					{ children }
          </Stack>
        </Stack>
      </Container>

      
    </Box>
  );
};

export default WrapperPage;
