import React from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { FiChevronDown, FiMenu, FiMessageCircle, FiShoppingBag, FiX } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/product' },
  { label: 'Bundles', to: '/bundles' },
  { label: 'Gifting', to: '/gifting' },
  { label: 'Quality', to: '/quality' },
  { label: 'Delivery', to: '/delivery' },
  { label: 'Recipes', to: '/recipes' },
  { label: 'FAQ', to: '/faq' },
];

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <Box as="header" position="sticky" top="0" zIndex="30" px={{ base: 3, md: 5 }} pt="3" className="site-header">
      <Container maxW="8xl" px="0">
        <Flex
          align="center"
          justify="space-between"
          gap={{ base: 3, md: 4 }}
          className="market-shell header-shell"
          borderRadius={{ base: '22px', md: '30px' }}
          px={{ base: 3, md: 5 }}
          py={{ base: 3, md: 3 }}
          w="100%"
          minW="0"
        >
          <Link to="/" onClick={onClose} style={{ minWidth: 0 }}>
            <HStack spacing="2" minW="0" flexShrink="1">
              <Image src={`${publicUrl}/logo.svg`} alt="PineApplee" h={{ base: '38px', md: '44px' }} w={{ base: '138px', md: '178px' }} objectFit="contain" />
            </HStack>
          </Link>

          <HStack
            as="nav"
            className="desktop-nav"
            spacing="1"
            bg="white"
            p="1"
            borderRadius="full"
            border="1px solid"
            borderColor="green.100"
          >
            {navItems.slice(0, 6).map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
            <Menu>
              <MenuButton as={Button} size="sm" variant="ghost" color="#123522" rightIcon={<FiChevronDown />}>
                More
              </MenuButton>
              <MenuList borderColor="green.100">
                {navItems.slice(6).map((item) => (
                  <MenuItem key={item.label} as={Link} to={item.to} fontWeight="800">
                    {item.label}
                  </MenuItem>
                ))}
                <MenuItem as={Link} to="/about" fontWeight="800">
                  Our Story
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          <HStack className="header-actions" spacing={{ base: 2, md: 2 }} flexShrink="0">
            <Button
              className="header-talk"
              as={Link}
              to="/contact"
              leftIcon={<FiMessageCircle />}
              bg="#ffd166"
              color="#123522"
              _hover={{ bg: '#f5b73b' }}
            >
              Talk fruit
            </Button>
            <Button
              className="header-cart"
              as={Link}
              to="/cart"
              leftIcon={<Icon as={FiShoppingBag} />}
              bg="#2f8f53"
              color="white"
              _hover={{ bg: '#236f40' }}
              px={{ base: 3, md: 4 }}
            >
              <Text display={{ base: 'none', md: 'inline' }}>Cart</Text>
              <Badge ml={{ base: 0, md: 1 }} bg="#ffd166" color="#123522" borderRadius="full">
                {cartItems.length}
              </Badge>
            </Button>
          </HStack>
        </Flex>

        <IconButton
          className="mobile-nav-toggle header-floating-toggle"
          aria-label="Toggle navigation"
          icon={<Icon as={isOpen ? FiX : FiMenu} />}
          onClick={onToggle}
          bg="#70d6ff"
          color="#123522"
          _hover={{ bg: '#ffd166' }}
          borderRadius="full"
          boxShadow="0 10px 22px rgba(18, 53, 34, .12)"
        />

        {isOpen && (
          <Stack mt="3" p="3" className="market-shell mobile-menu-panel" borderRadius="24px" spacing="2">
            {navItems.map((item) => (
              <NavItem key={item.label} item={item} mobile onClick={onClose} />
            ))}
            <NavItem item={{ label: `Cart (${cartItems.length})`, to: '/cart' }} mobile onClick={onClose} />
            <NavItem item={{ label: 'Contact', to: '/contact' }} mobile onClick={onClose} />
          </Stack>
        )}
      </Container>
    </Box>
  );
};

const NavItem = ({ item, mobile = false, onClick }) => (
  <Box
    as={NavLink}
    to={item.to}
    onClick={onClick}
    px={mobile ? 4 : 4}
    py={mobile ? 3 : 2}
    borderRadius="full"
    fontWeight="900"
    fontSize={mobile ? 'md' : 'sm'}
    color="#123522"
    _hover={{ color: '#123522', bg: '#eaf8ff' }}
    style={({ isActive }) => ({
      background: isActive ? '#ffd166' : 'transparent',
      color: '#123522',
    })}
  >
    {item.label}
  </Box>
);

export default Header;
