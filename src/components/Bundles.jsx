import React from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import toast from 'react-hot-toast';
import { FiCheckCircle, FiShoppingBag } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { bundlePlans } from '../data/products';
import crateGraphic from '../assets/graphics/bundle-crate.svg';
import { MotionVine } from './MotionOrchard';

const Bundles = () => {
  const dispatch = useDispatch();

  const addBundle = (plan) => {
    dispatch({
      type: 'addToCart',
      payload: {
        id: plan.id,
        name: plan.name,
        price: plan.price,
        quantity: 1,
        imgSrc: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80',
      },
    });
    dispatch({ type: 'calculatePrice' });
    toast.success(`${plan.name} added to cart`);
  };

  return (
    <Box bg="#fbfff6" color="#123522">
      <Box className="organic-hero orchard-map" py={{ base: 14, md: 20 }} overflow="hidden">
        <Container maxW="8xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr .8fr' }} gap="8" alignItems="center">
          <Stack maxW="820px" spacing="5">
            <Badge alignSelf="flex-start" bg="#ffd166" color="#123522" borderRadius="full" px="4" py="2">
              Build your box
            </Badge>
            <Heading fontSize={{ base: '42px', md: '66px' }} lineHeight="1">
              Choose the box size, then we pack the best fruit in season.
            </Heading>
            <Text color="#466655" fontSize="lg">
              Inspired by premium tropical box shops, PineApplee now supports curated bundles for families, offices, gifts, and events.
            </Text>
          </Stack>
          <Image src={crateGraphic} alt="Curated tropical fruit crate" borderRadius="28px" />
          </Grid>
        </Container>
      </Box>
      <Box bg="#fbfff6" pt="4"><MotionVine /></Box>

      <Container maxW="8xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="6">
          {bundlePlans.map((plan) => (
            <Stack
              key={plan.id}
              className="leaf-card"
              borderRadius="22px"
              p="6"
              spacing="5"
            >
              <HStack justify="space-between" align="start">
                <Badge bg={plan.badge === 'Most popular' ? '#2f8f53' : '#ffd166'} color={plan.badge === 'Most popular' ? 'white' : '#123522'} borderRadius="full" px="3" py="1">
                  {plan.badge}
                </Badge>
                <Text color="#466655" fontWeight="900">{plan.weight}</Text>
              </HStack>
              <Stack spacing="2">
                <Heading fontSize="2xl">{plan.name}</Heading>
                <Text color="#466655">{plan.description}</Text>
              </Stack>
              <HStack align="end">
                <Text fontSize="4xl" fontWeight="950" color="#f15f3d">${plan.price}</Text>
                <Text color="#6e8375" textDecoration="line-through" pb="2">${plan.compareAt}</Text>
              </HStack>
              <List spacing="3">
                {plan.includes.map((item) => (
                  <ListItem key={item} fontWeight="700">
                    <ListIcon as={FiCheckCircle} color="#2f8f53" />
                    {item}
                  </ListItem>
                ))}
              </List>
              <Button onClick={() => addBundle(plan)} bg="#2f8f53" color="white" _hover={{ bg: '#236f40' }} leftIcon={<FiShoppingBag />}>
                Add bundle
              </Button>
            </Stack>
          ))}
        </SimpleGrid>

        <Grid mt="12" templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="6">
          <Stack className="leaf-card" p="6" borderRadius="22px">
            <Heading fontSize="2xl">Flexible frequency</Heading>
            <Text color="#466655">Order one time, weekly, biweekly, or monthly. Customers can pause or change their next box through the contact flow.</Text>
          </Stack>
          <Stack bg="#ffd166" color="#123522" p="6" borderRadius="22px">
            <Heading fontSize="2xl">Freshness promise</Heading>
            <Text fontWeight="700">If your box arrives damaged, send a same-day photo and we will replace the item or credit your next order.</Text>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Bundles;
