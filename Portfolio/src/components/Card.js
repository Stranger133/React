import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box borderRadius='lg' bg='white'>
      <VStack align='stretch'>
        <Image src={imageSrc} alt={title} borderRadius='lg' objectFit='coverd' />
        <VStack spacing={4} align='stretch' p={4}>
          <Heading as='h5' size='sm' color='black'>{title}</Heading>
          <Text fontSize='sm' color='gray'>{description}</Text>
          <HStack>
            <Text fontSize='sm' color='black'>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="xs" style={{color: "#000000",}} />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;
