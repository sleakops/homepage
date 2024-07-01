import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

export const FeaturesScreenshot = () => {
  const { colorMode } = useColorMode()
  return (
    <Box as="section">
      <Box>
        <Container pt={{ base: '16', md: '24' }} pb={{ base: '28', md: '40' }}>
          <Stack spacing={{ base: '8', md: '10' }} align="center">
            <Stack spacing={{ base: '4', md: '5' }} textAlign="center">
              <Stack spacing="3">
                {/* <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="accent">
                  Demo
                </Text> */}
                <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
                  Unlock the Potential
                </Heading>
              </Stack>
              <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl" color="muted">
                You can get your Infra running in the Cloud without losing control.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bg="bg-surface">
        <Container>
          <Box
            transform={{ base: 'translateY(-64px)', md: 'translateY(-96px)' }}
            borderRadius="xl"
            overflow="hidden"
            boxShadow={useColorModeValue('xl', 'xl-dark')}
          >
          <Box
              as='video'
              controls
              src='https://s3.amazonaws.com/crafttech.io/SleakOps.mp4'
              poster='https://s3.amazonaws.com/crafttech.io/sleakops_play.png'
              objectFit='contain'
              sx={{
                aspectRatio: '16/9'
              }}
          />


            {/* <Box
                as='iframe'
                src='https://www.youtube.com/embed/TMLP5tNliys?si=S1QQBh7c5xdKYZuD'
                width='100%'
                sx={{
                  aspectRatio: '16/9'
                }}
            /> */}

            {/* <picture>
              <source
                srcSet={`/screenshots/console.png`}
                media="(max-width: 40em)"
              />
              <source
                srcSet={`/screenshots/console.png`}
                media="(max-width: 62em)"
              />
              <Image
                alt="SleakOps"
                srcSet={`/screenshots/console.png`}
                objectFit="cover"
              />
            </picture> */}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
