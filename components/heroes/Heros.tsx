import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import * as Logos from './Brands'

export function Heros() {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} pt="24" pb="12" overflow="hidden">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Flex
          align="flex-start"
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          mb="20"
        >
          <Box flex="1" maxW={{ lg: 'xl' }} pt="0">
            <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
              Deploya en tu cuenta AWS infra autoescalable y segura
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="xl">
              A través de nuestra plataforma podes crear clusters (k8s) en ambientes separados para correr servicios autoescalables de manera sencilla, rápida y segura. 
              Todo corriendo en tu cuenta AWS. (By <a href="https://craftech.io">Craftech</a>)
            </Text>
            <Button
              mt="8"
              minW="14rem"
              colorScheme="blue"
              size="lg"
              height="14"
              px="8"
              fontSize="md"
              fontWeight="bold"
            >
              Solicitar Demo
            </Button>
          </Box>
          <Box boxSize={{ base: '20', lg: '8' }} />
          <Img
            pos="relative"
            marginEnd="-16rem"
            w="50rem"
            src="/screenshots/console.png"
            alt="Screenshot for Form builder"
          />
        </Flex>
        <Box>
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
        </Box>
      </Box>
    </Box>
  )
}
