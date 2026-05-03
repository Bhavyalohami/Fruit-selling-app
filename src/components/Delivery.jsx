import React from 'react';
import { Badge, Box, Container, Grid, Heading, HStack, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FiClock, FiPackage, FiRefreshCw, FiTruck } from 'react-icons/fi';
import routeGraphic from '../assets/graphics/delivery-route.svg';

const deliverySteps = [
  { icon: FiClock, title: 'Order window', body: 'Orders placed before 2 PM are packed the same day when stock is available.' },
  { icon: FiPackage, title: 'Ripeness packing', body: 'We label ready-to-eat fruit separately from fruit that needs one or two days.' },
  { icon: FiTruck, title: 'City delivery', body: 'Local orders are routed in insulated crates to reduce bruising and heat exposure.' },
  { icon: FiRefreshCw, title: 'Freshness support', body: 'If an item arrives damaged, contact us with a photo on the same day.' },
];

const Delivery = () => {
  return (
    <Box bg="#fbfff6" color="#123522" className="orchard-map">
      <Container maxW="8xl" py={{ base: 12, md: 18 }}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr .85fr' }} gap="8" alignItems="center" mb="10">
        <Stack maxW="780px" spacing="5">
          <Badge alignSelf="flex-start" bg="#ffd166" color="#123522" borderRadius="full" px="4" py="2">
            Delivery and care
          </Badge>
          <Heading fontSize={{ base: '46px', md: '76px' }} lineHeight=".95">
            Fruit packed for the way you plan to use it.
          </Heading>
          <Text color="#466655" fontSize="lg">
            Pineapples bruise easily when rushed. Our delivery flow keeps orders sorted, labeled, and easy to store.
          </Text>
        </Stack>
        <Image src={routeGraphic} alt="City delivery route graphic" borderRadius="34px" />
        </Grid>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing="5">
          {deliverySteps.map((step) => (
            <Stack key={step.title} className="leaf-card" borderRadius="22px" p="6" spacing="4">
              <HStack justify="center" bg="#ffd166" color="#123522" boxSize="54px" borderRadius="full">
                <step.icon size="24" />
              </HStack>
              <Heading fontSize="xl">{step.title}</Heading>
              <Text color="#466655">{step.body}</Text>
            </Stack>
          ))}
        </SimpleGrid>

        <Grid mt="12" templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="6">
          <InfoPanel title="Storage tips" items={['Keep whole pineapples at room temperature if eating within two days.', 'Refrigerate cut pineapple in an airtight box.', 'For sweeter slices, chill before serving.']} />
          <InfoPanel title="Bulk orders" items={['Cafes can request consistent fruit sizes.', 'Event crates can be packed by color and presentation.', 'Weekly delivery windows are available on request.']} />
        </Grid>
      </Container>
    </Box>
  );
};

const InfoPanel = ({ title, items }) => (
  <Stack className="leaf-card" borderRadius="22px" p="6" spacing="3">
    <Heading fontSize="2xl">{title}</Heading>
    {items.map((item) => (
      <Text key={item} color="#466655" fontWeight="700">- {item}</Text>
    ))}
  </Stack>
);

export default Delivery;
