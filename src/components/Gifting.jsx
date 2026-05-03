import React from 'react';
import { Badge, Box, Button, Container, Grid, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import giftGraphic from '../assets/graphics/gift-box.svg';

const gifts = [
  ['Thank-you crate', 'Premium pineapple-led fruit with a handwritten note for clients and hosts.'],
  ['Celebration table', 'Ready-to-display tropical fruit for birthdays, office wins, and housewarmings.'],
  ['Cafe sampler', 'Juice-ready fruit and small-batch tropical add-ons for menu testing.'],
];

const Gifting = () => {
  return (
    <Box bg="#fbfff6" color="#123522" className="orchard-map">
      <Container maxW="8xl" py={{ base: 12, md: 18 }}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap="10" alignItems="center">
          <Stack spacing="5">
            <Badge alignSelf="flex-start" bg="#ffd166" color="#123522" borderRadius="full" px="4" py="2">
              Gifting and events
            </Badge>
            <Heading fontSize={{ base: '46px', md: '76px' }} lineHeight=".95">
              Fruit gifts that look intentional, not last-minute.
            </Heading>
            <Text color="#466655" fontSize="lg">
              Choose polished pineapple-led crates for clients, friends, celebrations, and office teams, with notes, presentation packing, and delivery timing handled together.
            </Text>
            <Button as={Link} to="/contact" bg="#2f8f53" color="white" rightIcon={<FiArrowRight />} alignSelf="flex-start">
              Request a custom gift
            </Button>
          </Stack>
          <Image
            src={giftGraphic}
            alt="Fruit gift crate"
            borderRadius="34px"
            h={{ base: '340px', md: '520px' }}
            w="100%"
            objectFit="cover"
          />
        </Grid>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6" mt="12">
          {gifts.map(([title, body]) => (
            <Stack key={title} className="leaf-card" borderRadius="22px" p="6">
              <Heading fontSize="2xl">{title}</Heading>
              <Text color="#466655">{body}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Gifting;
