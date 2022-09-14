import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'

import { Formik } from 'formik'
import * as Yup from 'yup'
import { contactApi } from '../../pages/api/contact'

export const ContactForm = () => {
  const toast = useToast()
  return (
    <Box as="section">
      <Box>
        <Container pt={{ base: '16', md: '24' }} pb='20'>
          <Stack spacing={{ base: '8', md: '10' }} align="center">
            <Stack spacing={{ base: '4', md: '5' }} textAlign="center">
              <Stack spacing="3">
                <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="accent">
                  Contact
                </Text>
                <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
                  Book a demo
                </Heading>
              </Stack>
              <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl" color="muted">
                Let us know what you need, we can surely help you.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box as="section" pb="20">
        <Container maxW="lg">
          <Formik
            initialValues={{
              name: '',
              email: '',
              company: '',
              comments: '',
              submit: null,
            }}
            validationSchema={Yup
              .object()
              .shape({
                name: Yup
                  .string()
                  .max(100)
                  .required('Name is required'),
                email: Yup
                  .string()
                  .email('Must be a valid email')
                  .max(255)
                  .required('Email is required'),
                company: Yup
                  .string()
                  .max(100)
                  .required('Company is required'),
                comments: Yup
                  .string()
                  .max(500),
              })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
              try {
                await contactApi.contact(values)
                setStatus({ success: true })
                setSubmitting(false)
                resetForm()
                toast({
                  title: 'Thanks',
                  description: "Thank you for contacting us, we'll get back to you as soon as we can.",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
              } catch (err:any) {
                setStatus({ success: false })
                setErrors({ submit: err.response.status })
                console.log("err.response.status", err.response.status)
                setSubmitting(false)
              }
            }}
          >
            {({ errors, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form
                noValidate
                onSubmit={handleSubmit}
              >
                <Stack spacing="10">
                  <FormControl isInvalid={Boolean(errors.name) && touched.name}>
                    <FormLabel htmlFor="name" size="lg">
                      Name
                    </FormLabel>
                    <Input 
                      id="name" 
                      size="lg"
                      data-peer
                      onChange={handleChange}
                      value={values.name}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  {/* {console.log(errors.email)} */}
                  <FormControl isInvalid={Boolean(errors.email) && touched.email}> 
                    <FormLabel htmlFor="email" size="lg">
                      Email
                    </FormLabel>
                    <Input 
                      id="email" 
                      size="lg" 
                      data-peer
                      onChange={handleChange}
                      value={values.email}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>          
                  </FormControl>

                  <FormControl isInvalid={Boolean(errors.company) && touched.company}> 
                    <FormLabel htmlFor="company" size="lg">
                      Company
                    </FormLabel>
                    <Input 
                      id="company" 
                      size="lg"                      
                      data-peer
                      onChange={handleChange}
                      value={values.company}
                    />
                    <FormErrorMessage>{errors.company}</FormErrorMessage>          
                  </FormControl>

                  <FormControl>  
                    <FormLabel htmlFor="comments" size="lg">
                      Comments
                    </FormLabel>
                    <Textarea 
                      id="comments" 
                      rows={3} 
                      resize="none" 
                      data-peer
                      value={values.comments}
                      onChange={handleChange}
                    />
                  </FormControl>            
                </Stack>

                <Stack spacing="10" py="10">
                    <Button 
                      variant="primary"
                      type="submit"
                      size="lg"
                      isLoading={isSubmitting}
                    >
                      Send
                    </Button>
                </Stack>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Box>
  )
}
