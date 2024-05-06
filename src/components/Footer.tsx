import { Box, Container, Link, Stack, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box bg="gray.800" color="white">
      <Container maxW="container.lg" py={8}>
        <Stack spacing={4} direction={{ base: "column", md: "row" }} justify="space-between" align="center">
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} My App. All rights reserved.
          </Text>
          <Stack direction="row" spacing={4}>
            <Link href="https://www.example.com/privacy" isExternal>
              Privacy Policy
            </Link>
            <Link href="https://www.example.com/terms" isExternal>
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;