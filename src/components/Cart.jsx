import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const { cartItems, shipping, tax, total, subTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const recalculate = () => dispatch({ type: 'calculatePrice' });
  const increment = (id) => {
    dispatch({ type: 'addToCart', payload: { id } });
    recalculate();
  };
  const decrement = (id) => {
    dispatch({ type: 'decrement', payload: id });
    recalculate();
  };
  const deleteHandler = (id) => {
    dispatch({ type: 'removeFromCart', payload: id });
    recalculate();
  };

  return (
    <Box bg="#fbfff6" color="#123522" minH="70vh" className="orchard-map">
      <Container maxW="8xl" py={{ base: 12, md: 16 }}>
        <HStack justify="space-between" align="flex-end" mb="8" flexWrap="wrap" gap="4">
          <Box>
            <Badge bg="#ffd166" color="#123522" borderRadius="full" px="4" py="2">Your order</Badge>
            <Heading mt="4" fontSize={{ base: '46px', md: '76px' }} lineHeight=".95">Cart</Heading>
          </Box>
          <Button as={Link} to="/product" variant="outline" borderColor="#2f8f53" color="#123522" _hover={{ bg: '#e7f7ea' }}>
            Keep shopping
          </Button>
        </HStack>

        <Grid templateColumns={{ base: '1fr', lg: '1.5fr .8fr' }} gap="8" alignItems="start">
          <Stack spacing="4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increment={increment}
                  decrement={decrement}
                  deleteHandler={deleteHandler}
                />
              ))
            ) : (
              <VStack className="leaf-card" borderRadius="22px" p="12" spacing="4">
                <FiShoppingBag size="44" color="#2f8f53" />
                <Heading fontSize="2xl">Your cart is empty</Heading>
                <Text color="#466655" textAlign="center">Add a pineapple box or fruit crate to start building your order.</Text>
                <Button as={Link} to="/product" bg="#2f8f53" color="white">
                  Browse products
                </Button>
              </VStack>
            )}
          </Stack>

          <Stack className="leaf-card" borderRadius="22px" p="6" spacing="5" position={{ lg: 'sticky' }} top="116px">
            <Heading fontSize="2xl">Order summary</Heading>
            <SummaryRow label="Subtotal" value={subTotal} />
            <SummaryRow label="Shipping" value={shipping} />
            <SummaryRow label="Tax" value={tax} />
            <Divider borderColor="rgba(18, 53, 34, .12)" />
            <HStack justify="space-between">
              <Text fontSize="lg" fontWeight="900">Total</Text>
              <Text fontSize="3xl" fontWeight="950" color="#f15f3d">${total}</Text>
            </HStack>
            <Text color="#466655" fontSize="sm">
              Free shipping is automatically applied on orders above $100.
            </Text>
            <Button as={Link} to="/checkout" bg="#ffd166" color="#123522" size="lg" isDisabled={cartItems.length === 0}>
              Proceed to checkout
            </Button>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

const SummaryRow = ({ label, value }) => (
  <HStack justify="space-between">
    <Text color="#466655" fontWeight="700">{label}</Text>
    <Text fontWeight="900">${value}</Text>
  </HStack>
);

const CartItem = ({ item, increment, decrement, deleteHandler }) => (
  <Grid
    templateColumns={{ base: '96px 1fr', md: '132px 1fr auto' }}
    gap="5"
    className="leaf-card"
    borderRadius="22px"
    p="4"
    alignItems="center"
  >
    <Image src={item.imgSrc} alt={item.name} h={{ base: '96px', md: '132px' }} w="100%" objectFit="cover" borderRadius="8px" />
    <Stack spacing="2">
      <Heading fontSize={{ base: 'lg', md: '2xl' }}>{item.name}</Heading>
      <Text color="#466655" fontWeight="700">${item.price} each</Text>
      <HStack>
        <IconButton aria-label="Decrease quantity" icon={<FiMinus />} onClick={() => decrement(item.id)} size="sm" />
        <Text fontWeight="900" minW="8" textAlign="center">{item.quantity}</Text>
        <IconButton aria-label="Increase quantity" icon={<FiPlus />} onClick={() => increment(item.id)} size="sm" />
      </HStack>
    </Stack>
    <HStack justify={{ base: 'flex-start', md: 'flex-end' }} gridColumn={{ base: '2 / 3', md: 'auto' }}>
      <Text fontSize="2xl" fontWeight="900">${item.price * item.quantity}</Text>
      <IconButton
        aria-label={`Remove ${item.name}`}
        icon={<AiFillDelete />}
        onClick={() => deleteHandler(item.id)}
        colorScheme="red"
        variant="ghost"
      />
    </HStack>
  </Grid>
);

export default Cart;
