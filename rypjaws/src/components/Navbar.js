import { ReactNode } from 'react';
import {
  Image,
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, StarIcon } from '@chakra-ui/icons';
import Logo from "./../assets/RypJaws-white.png";

const Links = [
  { label: 'Repository', href: 'https://github.com/MihirRajeshPanchal/rypjaws' },
  { label: 'Marketplace', href: 'https://marketplace.visualstudio.com/items?itemName=MihirPanchal.rypjaws' },
  { label: 'Downloads', href: 'vscode:extension/MihirPanchal.rypjaws' },
  { label: 'Community', href: 'https://github.com/MihirRajeshPanchal/rypjaws/discussions' },
  { label: 'Team', href: 'https://github.com/MihirRajeshPanchal/rypjaws/graphs/contributors' },
];

const NavLink = ({ children, href }: { children: ReactNode, href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image src={Logo} boxSize="60px" />
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'green'}
              size={'sm'}
              mr={4}
              leftIcon={<StarIcon />}
            >
              <a href="https://github.com/MihirRajeshPanchal/rypjaws">
                Star on Github
              </a>
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
