import React from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiMail, FiMapPin, FiPhone, FiYoutube } from 'react-icons/fi';
import { MotionVine } from './MotionOrchard';

const Footer = () => {
  return (
    <Box as="footer" bg="#123522" color="white" overflow="hidden">
      <Box bg="#fbfff6" pt="8">
        <MotionVine />
      </Box>
      <Container maxW="8xl" py={{ base: 10, md: 14 }}>
        <Grid templateColumns={{ base: '1fr', lg: '1.2fr .7fr .7fr 1fr' }} gap="8">
          <Stack spacing="4">
            <Badge alignSelf="flex-start" bg="#ffd166" color="#123522" borderRadius="full" px="3" py="1">
              Fresh tropical market
            </Badge>
            <Image src="/logo.svg" alt="PineApplee" width="190px" bg="white" borderRadius="18px" p="2" />
            <Text color="whiteAlpha.800" maxW="420px">
              Pineapple-led fruit boxes for homes, cafes, offices, and gifting. Sorted by ripeness, packed with care, and delivered bright.
            </Text>
            <HStack color="whiteAlpha.850">
              <FiMapPin />
              <Text>Fresh Market Road, Tropical Yard</Text>
            </HStack>
          </Stack>

          <FooterLinks title="Explore" links={[
            ['Home', '/'],
            ['Shop', '/product'],
            ['Build a Box', '/bundles'],
            ['Our Story', '/about'],
            ['Quality', '/quality'],
            ['Recipes', '/recipes'],
          ]} />

          <FooterLinks title="Support" links={[
            ['Gifting', '/gifting'],
            ['Delivery', '/delivery'],
            ['FAQ', '/faq'],
            ['Cart', '/cart'],
            ['Contact', '/contact'],
          ]} />

          <Stack spacing="4">
            <Text fontWeight="900" color="#ffd166">Stay in the harvest loop</Text>
            <Text color="whiteAlpha.800">
              Get seasonal boxes, bulk order reminders, and serving ideas.
            </Text>
            <HStack>
              <Input placeholder="Email address" bg="whiteAlpha.100" borderColor="whiteAlpha.300" />
              <Button bg="#ffd166" color="#123522">Join</Button>
            </HStack>
            <Stack spacing="2" color="whiteAlpha.850">
              <HStack><FiPhone /><Text>+91 01234 56789</Text></HStack>
              <HStack><FiMail /><Text>hello@pineapplee.market</Text></HStack>
            </Stack>
          </Stack>
        </Grid>

        <Divider my="8" borderColor="whiteAlpha.200" />
        <HStack justify="space-between" gap="5" flexWrap="wrap">
          <Text color="whiteAlpha.700">All rights reserved. Built for fresh tropical orders.</Text>
          <HStack>
            <Button as="a" href="https://instagram.com" leftIcon={<FiInstagram />} variant="outline" color="white" borderColor="whiteAlpha.400">
              Instagram
            </Button>
            <Button as="a" href="https://youtube.com" leftIcon={<FiYoutube />} variant="outline" color="white" borderColor="whiteAlpha.400">
              YouTube
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

const FooterLinks = ({ title, links }) => (
  <Stack spacing="3">
    <Text fontWeight="900" color="#ffd166">{title}</Text>
    {links.map(([label, to]) => (
      <Link key={to} to={to}>
        <Text color="whiteAlpha.800" fontWeight="700" _hover={{ color: '#70d6ff' }}>{label}</Text>
      </Link>
    ))}
  </Stack>
);

export default Footer;
