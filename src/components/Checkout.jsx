import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
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
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { cartItems, shipping, tax, total, subTotal } = useSelector((state) => state.cart);

  const submitHandler = (event) => {
    event.preventDefault();
    toast.success('Order request placed. PineApplee will confirm availability.');
  };

  return (
    <Box bg="#fbfff6" color="#123522" minH="70vh" className="orchard-map">
      <Container maxW="8xl" py={{ base: 12, md: 16 }}>
        <Badge bg="#ffd166" color="#123522" borderRadius="full" px="4" py="2">Checkout</Badge>
        <Heading mt="4" mb="8" fontSize={{ base: '46px', md: '76px' }} lineHeight=".95">Confirm your fresh order</Heading>

        <Grid templateColumns={{ base: '1fr', lg: '1.2fr .8fr' }} gap="8" alignItems="start">
          <Box as="form" onSubmit={submitHandler} className="leaf-card" borderRadius="22px" p={{ base: 5, md: 8 }}>
            <Stack spacing="5">
              <Heading fontSize="2xl">Delivery details</Heading>
              <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="4">
                <FormControl isRequired>
                  <FormLabel>Full name</FormLabel>
                  <Input placeholder="Your name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Phone</FormLabel>
                  <Input placeholder="+91..." />
                </FormControl>
              </Grid>
              <FormControl isRequired>
                <FormLabel>Delivery address</FormLabel>
                <Textarea placeholder="House, street, city, postal code" minH="120px" />
              </FormControl>
              <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="4">
                <FormControl>
                  <FormLabel>Preferred date</FormLabel>
                  <Input type="date" />
                </FormControl>
                <FormControl>
                  <FormLabel>Ripeness preference</FormLabel>
                  <Input placeholder="Ready today, 2-day shelf life..." />
                </FormControl>
              </Grid>
              <Button type="submit" bg="#2f8f53" color="white" size="lg" isDisabled={cartItems.length === 0}>
                Place order request
              </Button>
            </Stack>
          </Box>

          <Stack className="leaf-card" borderRadius="22px" p="6" spacing="5">
            <Heading fontSize="2xl">Order review</Heading>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <HStack key={item.id} justify="space-between" align="start">
                  <Box>
                    <Text fontWeight="900">{item.name}</Text>
                    <Text color="#466655">Qty {item.quantity}</Text>
                  </Box>
                  <Text fontWeight="900">${item.price * item.quantity}</Text>
                </HStack>
              ))
            ) : (
              <Text color="#466655">Your cart is empty.</Text>
            )}
            <Divider borderColor="rgba(18, 53, 34, .12)" />
            <SummaryRow label="Subtotal" value={subTotal} />
            <SummaryRow label="Shipping" value={shipping} />
            <SummaryRow label="Tax" value={tax} />
            <Divider borderColor="rgba(18, 53, 34, .12)" />
            <HStack justify="space-between">
              <Text fontWeight="900">Total</Text>
              <Text fontSize="3xl" fontWeight="950" color="#f15f3d">${total}</Text>
            </HStack>
            <Button as={Link} to="/cart" variant="outline" color="#123522" borderColor="#2f8f53" _hover={{ bg: '#e7f7ea' }}>
              Edit cart
            </Button>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

const SummaryRow = ({ label, value }) => (
  <HStack justify="space-between">
    <Text color="#466655" fontWeight="800">{label}</Text>
    <Text fontWeight="900">${value}</Text>
  </HStack>
);

export default Checkout;
