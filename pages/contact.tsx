import * as React from 'react'
import { CallToAction } from '../components/call_to_action/CallToAction'
import { ContactForm } from '../components/contact_form/ContactForm'
import { Footer } from '../components/footer/Footer'
import { Navbar } from '../components/navbar/Navbar'
import {Box, useColorModeValue as mode } from '@chakra-ui/react'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box 
        as="section"
        bg={mode("gray.50", "gray.800")}
      >
        <ContactForm />
      </Box>
      <CallToAction />
      <Footer />
    </>
  )
}

export default Contact