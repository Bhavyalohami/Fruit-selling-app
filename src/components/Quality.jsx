import React from 'react';
import { Badge, Box, Container, Grid, Heading, HStack, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FiAward, FiBox, FiShield, FiThermometer } from 'react-icons/fi';
import qualityGraphic from '../assets/graphics/quality-scan.svg';

const checks = [
  { icon: FiThermometer, title: 'Heat-aware handling', body: 'Fruit is kept out of long hot holds and packed for quick local dispatch.' },
  { icon: FiAward, title: 'Ripeness grading', body: 'Each order is separated into ready-now and later-this-week fruit where possible.' },
  { icon: FiBox, title: 'Protective packing', body: 'Gift and event orders get presentation packing with cushioning for delicate produce.' },
  { icon: FiShield, title: 'Satisfaction support', body: 'Same-day damage reports are handled with replacement or credit support.' },
];

const Quality = () => {
  return (
    <Box bg="#fbfff6" color="#123522" className="orchard-map">
      <Container maxW="8xl" py={{ base: 12, md: 18 }}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr .85fr' }} gap="8" alignItems="center" mb="10">
        <Stack maxW="780px" spacing="5">
          <Badge alignSelf="flex-start" bg="#ffd166" color="#123522" borderRadius="full" px="4" py="2">
            Quality promise
          </Badge>
          <Heading fontSize={{ base: '46px', md: '76px' }} lineHeight=".95">
            Perishable fruit needs more trust than ordinary ecommerce.
          </Heading>
          <Text color="#466655" fontSize="lg">
            Every order is checked for aroma, color, give, presentation, and delivery timing before it leaves the packing desk.
          </Text>
        </Stack>
        <Image src={qualityGraphic} alt="Pineapple quality scan graphic" borderRadius="34px" />
        </Grid>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing="5">
          {checks.map((check) => (
            <Stack key={check.title} className="leaf-card" borderRadius="22px" p="6">
              <HStack color="#2f8f53" fontSize="28px"><check.icon /></HStack>
              <Heading fontSize="xl">{check.title}</Heading>
              <Text color="#466655">{check.body}</Text>
            </Stack>
          ))}
        </SimpleGrid>

        <Grid mt="12" templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap="5">
          {['Smell', 'Color', 'Give'].map((label, index) => (
            <Stack key={label} className="leaf-card" borderRadius="22px" p="6">
              <Text color="#f15f3d" fontWeight="900">Check 0{index + 1}</Text>
              <Heading fontSize="2xl">{label}</Heading>
              <Text color="#466655">
                {index === 0 && 'A ripe pineapple should smell sweet near the base, never fermented.'}
                {index === 1 && 'Golden tones suggest ripeness, but variety and shipping stage matter too.'}
                {index === 2 && 'A slight softness is useful. Heavy bruising is not acceptable.'}
              </Text>
            </Stack>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Quality;
