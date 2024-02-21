import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { FC } from "react";
import Link from "next/link";
import { INavbarLink } from "constants/types";
import { navbarButtons } from "constants/navbarLinks";
import { HEROS_TEXT } from "constants/consts";

const Heros: FC = () => {
  const DEMO_BUTTON: INavbarLink = navbarButtons[1];
  return (
    <Box
      as="section"
      bg={mode("gray.50", "gray.800")}
      pt="24"
      pb="10"
      overflow="hidden"
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Flex
          align="flex-start"
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          mb="5"
        >
          <Box flex="1" maxW={{ lg: "xl" }} pt="0">
            <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
              Lift Your Ideas
              <br />
              to the Clouds,
              <br />
              Leave the Journey to Us.
            </Heading>
            <Text color={mode("gray.600", "gray.400")} mt="5" fontSize="xm">
              { HEROS_TEXT }
            </Text>
            <Box flex="1" pt="10">
              <Link href={DEMO_BUTTON.href} passHref>
                <Button variant={DEMO_BUTTON.variant}>{DEMO_BUTTON.label}</Button>
              </Link>
            </Box>
          </Box>
          <Box boxSize={{ base: "20", lg: "8" }} />
          <Img
            pos="relative"
            marginEnd="-16rem"
            w="50rem"
            src="/screenshots/console.png"
            alt="Screenshot for Form builder"
            style={{ boxShadow: "2px 8px 24px 0px rgba(8,7,7,0.72)" }}
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default Heros;
