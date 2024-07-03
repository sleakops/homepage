import { Box, Button, HStack, Heading, Icon, List, ListItem, SimpleGrid, Spacer, Stack, Text } from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'

export const Plan = (plan) => {
}

export const PricingPlans = () => {
  const plans = [
    // {
    //   'features': [
    //     '1 AWS Accounts',
    //     '1 Cluster',
    //     '1 Project',
    //     '1 Environment',
    //     '4 Services',
    //   ],
    //   'name': 'Free',
    //   'link': 'https://aws.amazon.com/marketplace/pp/prodview-c6e4g3knpgtgs',
    //   'name_button_action': 'Register',
    //   'price': '$0'
    // },
    {
      'features': [
        '1 AWS Accounts',
        '2 Cluster',
        '15 Project',
        '3 Environment',
        '30 Services',
        'Autoscalling',
        'Spot Instances',
        'Cluster Updates',
        'Add-ons',
      ],
      'name': 'Basic',
      'link': 'https://aws.amazon.com/marketplace/pp/prodview-c6e4g3knpgtgs',
      'name_button_action': 'Buy now',
      'price': "$350 /mo"
    },
    {
      'features': [
        'Advanced Features',
        'Custom limits',
        'Extended security and compliance',
        'Custom support',
      ],
      'name': 'Enterprise',
      'link': '/bookdemo',
      'name_button_action': 'Book a demo',
      'price': "Custom"
    }
  ]

  return (
    <SimpleGrid 
      columns={{ base: 1, md: 2 }} 
      spacing="6"
      mb={10}
    >
    {plans.map((plan) => (
      <>
        <Box
          bg="bg.surface"
          borderWidth="1px"
          borderRadius="2xl"
          boxShadow="sm"
          px={{ base: '6', md: '8' }}
          py="8"
          mx={{ base: '6', md: '8' }}
          mt={{ base: '12', md: '24' }}
          // width="full"
          // maxW="lg"
        >
          <Stack spacing={{ base: '10', md: '10' }} textAlign="center" height={"100%"}>
            
            <Stack align="center">
              <Text textStyle={{ base: 'md', md: 'lg' }} fontWeight="semibold">
                {plan.name}
              </Text>
              <Heading size={{ base: 'md', md: 'lg' }}>{plan.price}</Heading>
              {/* <Text color="fg.muted">plus local taxes</Text> */}
            </Stack>
            <List spacing="4">
              {plan.features.map((feature) => (
                <ListItem key={feature} color="fg.muted">
                  <HStack spacing="4">
                    <Icon as={FiCheck} color="accent" boxSize="6" />
                    <Text textAlign="left">{feature}</Text>
                  </HStack>
                </ListItem>
              ))}
            </List>
            <Spacer></Spacer>
            <Button 
              size="xl" 
              as="a" 
              href={plan.link}
              bottom={0}
              // variant="secondary"
              target='_blank'
              >
              {plan.name_button_action}</Button>
          </Stack>
        </Box>
      </>
    ))}
    </SimpleGrid>
  )
}