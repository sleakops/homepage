import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  Highlight,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { Calendly } from "../calendly_button/CalendlyButton";
import * as Logos from "./Brands";
import BookDemoButton from "../bookdemo/BookDemoButton";

export function Heros() {
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
            
            <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold" lineHeight='normal'>
              <>
                <Highlight query={["Your Ideas", "Journey", "Us"]} 
                          styles={{ px: '2', py: '0', bg: 'accent' }}>
                  Lift Your Ideas to the Cloud
                </Highlight>
                <br/>
                <Highlight query={["Journey", "Us"]} 
                          styles={{ px: '2', py: '0', bg: 'accent' }}>
                  Leave the Journey to Us.
                </Highlight>
              </>
            </Heading>
            
            <Text color={mode("gray.600", "gray.400")} mt="5" fontSize="xm">
              With SleakOps, deploy your applications with confidence. 
              Our platform is crafted to empower you with the best DevOps practices and a solid cloud foundation. 
              Simplify your path to innovation and ensure efficient deployment aligned with the industry's highest standards.
              {/* SleakOps relies on the best practices to automate all the
              repetitive tasks of your scalable applications. Run your apps on
              the Cloud without worrying about your DevOps support. */}
            </Text>
            <BookDemoButton
              mt="8"
              minW="14rem"
              colorScheme="blue"
              size="lg"
              height="14"
              px="8"
              fontSize="md"
              fontWeight="bold"
            />
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
        {/* <Box>
          <Text color={mode('gray.600', 'gray.400')} fontWeight="medium">
            Tecnologías que usamos
          </Text>
          <SimpleGrid
            mt="8"
            columns={{ base: 2, md: 3, lg: 6 }}
            color="gray.500"
            alignItems="center"
            spacing={{ base: '12', lg: '24' }}
            fontSize="2xl"
          >
            <Logos.ChatMonkey />
            <Logos.Wakanda />
            <Logos.Lighthouse />
            <Logos.Plumtic />
            <Logos.WorkScout />
            <Logos.Finnik />
          </SimpleGrid>
        </Box> */}
      </Box>
    </Box>
  );
}
