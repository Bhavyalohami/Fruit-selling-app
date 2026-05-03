import {
  Badge,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import toast from 'react-hot-toast';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    toast.success('Message received. We will get back to you soon.');
  };

  return (
    <Box bg="#fbfff6" color="#123522" className="orchard-map">
      <Container maxW="8xl" py={{ base: 12, md: 18 }}>
        <Grid templateColumns={{ base: '1fr', lg: '.9fr 1.1fr' }} gap="10" alignItems="start">
          <Stack spacing="6">
            <Badge alignSelf="flex-start" bg="#ffd166" color="#123522" borderRadius="full" px="4" py="2">
              Talk to PineApplee
            </Badge>
            <Heading fontSize={{ base: '46px', md: '76px' }} lineHeight=".95">
              Need ripe fruit for a home, cafe, office, or event?
            </Heading>
            <Text color="#466655" fontSize="lg">
              Send your quantity, preferred delivery date, and any ripeness notes. We can help with weekly boxes, party crates, juice packs, and gifting.
            </Text>
            <Stack spacing="4">
              <ContactLine icon={<FiPhone />} title="Call" value="+91 01234 56789" />
              <ContactLine icon={<FiMail />} title="Email" value="hello@pineapplee.market" />
              <ContactLine icon={<FiMapPin />} title="Packing desk" value="Fresh Market Road, Tropical Yard" />
            </Stack>
          </Stack>

          <Box as="form" onSubmit={submitHandler} className="leaf-card" borderRadius="22px" p={{ base: 5, md: 8 }}>
            <Stack spacing="5">
              <Heading fontSize="2xl">Send an enquiry</Heading>
              <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="4">
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Your name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Phone or email</FormLabel>
                  <Input placeholder="How should we reach you?" />
                </FormControl>
              </Grid>
              <FormControl>
                <FormLabel>Order type</FormLabel>
                <Input placeholder="Home box, event crate, cafe supply..." />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea minH="150px" placeholder="Tell us quantity, timing, and delivery area." />
              </FormControl>
              <Button type="submit" bg="#2f8f53" color="white" size="lg">
                Send message
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

const ContactLine = ({ icon, title, value }) => (
  <HStack className="leaf-card" borderRadius="18px" p="4">
    <Box color="#2f8f53" fontSize="22px">{icon}</Box>
    <Box>
      <Text color="#6e8375" fontWeight="800" fontSize="sm">{title}</Text>
      <Text fontWeight="900">{value}</Text>
    </Box>
  </HStack>
);

export default Contact;
