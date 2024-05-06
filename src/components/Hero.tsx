import { Box, Container, Heading, Text } from "@chakra-ui/react";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <Box
      bgImage={`url(${image})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={28}
      position="relative"
    >
      <Container maxW="container.lg">
        <Box position="relative" zIndex={1}>
          <Heading as="h1" size="2xl" textAlign="center" color="white">
            {title}
          </Heading>
          <Text fontSize="xl" textAlign="center" color="white">
            {subtitle}
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
