import React, { FC } from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  List,
  ListItem,
  HStack,
  Icon,
  Button,
} from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";
import { BUY_NOW, SEE_A_DEMO } from "constants/consts";
import { ICard } from "constants/types";

interface ICardPrice {
    card: ICard
};

const CardPrice: FC<ICardPrice> = (props: ICardPrice) => {
    const { card } = props;
  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      boxShadow="sm"
      px={{ base: "6", md: "8" }}
      py="8"
      width="full"
      maxW="lg"
      borderColor={card.isHighlighted ? "whiteAlpha.900" : "bg.surface" }
    >
      <Stack spacing={{ base: "10", md: "10" }} textAlign="center">
        <Stack align="center">
          <Text textStyle={{ base: "md", md: "lg" }} fontWeight="semibold">
            { card.planName}
          </Text>
          <Heading size={{ base: "md", md: "lg" }}>{card.pricePerMonth}</Heading>
          <Text color="fg.muted">{card.pricePerYear}</Text>
        </Stack>
        <List spacing="4">
          {card.features.map((feature) => (
            <ListItem key={feature} color="fg.muted">
              <HStack spacing="4">
                <Icon as={FiCheck} color="accent" boxSize="6" />
                <Text>{feature}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
        { card.displayBuyButton && <Button size="lg">{BUY_NOW}</Button> }
        <Button style={card.displayBuyButton ? { marginTop: 10 } : { marginTop: 40 }} variant="primary" size="lg">{SEE_A_DEMO}</Button>
      </Stack>
    </Box>
  );
};

export default CardPrice;
