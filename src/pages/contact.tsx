import * as React from 'react'
import { CallToAction } from '../components/call_to_action/CallToAction'
import { ContactForm } from '../components/contact_form/ContactForm'
import { Footer } from '../components/Footer/Footer'
// import { Navbar } from '../components/Navbar/Navbar'

const Contact = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ContactForm />
      <CallToAction />
      <Footer />
    </>
  )
}

export default Contact