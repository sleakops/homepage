import { 
  Box, 
  Container, 
  Heading, 
  Stack, 
  Text, 
  useColorModeValue as mode } from '@chakra-ui/react'
import { PricingPlans } from '../components/pricing_plan/pricingPlan' 
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { CallToAction } from '../components/call_to_action/CallToAction'

const Pricing = () => (
  <>
    <Navbar />
    <Box as="section" bg={mode("gray.50", "gray.800")}>
      <Container py={{ base: '16', md: '24' }}>
        <Stack spacing={{ base: '12', md: '16' }} align="center">
          <Stack spacing={{ base: '4', md: '6' }}>
            <Stack spacing="3" align="center">
              <Text textStyle={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="accent">
                Pricing
              </Text>
              <Heading size={{ base: 'md', md: 'lg' }} fontWeight="semibold" textAlign="center">
                All Plans Include Unlimited Users
              </Heading>
            </Stack>
            <Text color="fg.muted" textStyle={{ base: 'lg', md: 'xl' }} maxW="3xl" textAlign="center">
              Add your entire team with one flat rate. Lifetime support & service implementation to get set up right the first time.
            </Text>
          </Stack>
        </Stack>
        <PricingPlans />
      </Container>
    </Box>
    <CallToAction />
    <Footer/>
  </>
)

export default Pricing