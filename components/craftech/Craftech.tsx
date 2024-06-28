import { Box, Button, Flex, Heading, HStack, Img, Stack, Text, Image } from '@chakra-ui/react'
import { HiChevronRight } from 'react-icons/hi'
import Link from "next/link"

export const Craftech = () => {
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box pt="32" position="relative" zIndex={1}>
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} color="white">
        <Stack direction={{ base: 'column', md: 'row' }} spacing="16">
          <Stack spacing={{ base: '6', md: '8' }}>
            <Heading as="h1" size="3xl" fontWeight="extrabold">
              Built By Craftech
            </Heading>
            <Text fontSize={{ md: '2xl' }} mt="4" maxW="2xl">
              SleakOps is part of{" "}
              <Link href="https://craftech.io" passHref>
                <a>Craftech</a>
              </Link>
              , a company specializing in DevOps and Cloud Engineering. We are
              experts in infrastructure and we based our platform in our knowledge
              and expertise develop through our experiences in different projects.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} mt="10" spacing="4">
              {/* <Button
                as="a"
                href="#"
                colorScheme="blue"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                Request Demo
              </Button> */}
              <HStack
                as="a"
                target='_blank'
                transition="background 0.2s"
                justify={{ base: 'center', md: 'flex-start' }}
                href="https://craftech.io"
                color="white"
                rounded="full"
                fontWeight="bold"
                px="6"
                py="3"
                _hover={{ bg: 'whiteAlpha.300' }}
              >
                  <span>Visit our website</span>
                <HiChevronRight />
              </HStack>
            </Stack>
          </Stack>
          <Stack spacing={{ base: '6', md: '8' }}>
            <Image
                mx="auto"
                maxH={"80%"}
                objectFit="cover"
                src="/images/craftech_hero.svg"
                alt="Craftech"
              />
          </Stack>
        </Stack>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            // src="images/craftech.png"
            src="images/ct_slide.png"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.100" />
        </Box>
      </Flex>
    </Box>
  )
}