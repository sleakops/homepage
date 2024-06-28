import {
  Box,
  Container,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const Video = () => (
  <Box as="section" bg="bg-surface">
    <Container py={{ base: '16', md: '24' }}>

      <Box
        transform={{ base: 'translateY(-64px)', md: 'translateY(-96px)' }}
        borderRadius="xl"
        overflow="hidden"
        boxShadow={useColorModeValue('xl', 'xl-dark')}
      />
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
    </Container>
  </Box>
)
