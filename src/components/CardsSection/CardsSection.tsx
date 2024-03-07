import { SimpleGrid } from "@chakra-ui/react";
import { CardPrice } from "../";
import React, { FC } from "react";
import { ICard } from "constants/types";

interface ICardsSection {
  cards: ICard[];
  style?: any;
};

const CardsSection: FC<ICardsSection> = (props: ICardsSection) => {
  const { cards, style } = props;
  return (
    <SimpleGrid style={style} columns={{ base: 1, md: 3 }} spacing="6">
      { cards?.map((card: ICard) => 
        <CardPrice card={card}/>
      )}
    </SimpleGrid>
  );
};

export default CardsSection;
