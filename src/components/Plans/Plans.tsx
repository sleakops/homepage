import React, { FC, useEffect, useState } from "react";
import { CardsSection, Switch, WrapperPage } from "../";
import { PRICING, PRICING_DESCRIPTION, PRICING_TITLE } from "constants/consts";
import { IPlan } from "constants/types";
import { cardsDataPerMonth, cardsDataPerYear } from "constants/cardsData";

export interface IPlansProps {
  plans: IPlan[];
  index: number;
  handleClick: (itemLabel: string) => void;
};

const Plans: FC<IPlansProps> = (props: IPlansProps) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const planType = props.plans.find((plan: IPlan) => plan.clicked);
    if (planType.index === 0) setList(cardsDataPerMonth);
    else setList(cardsDataPerYear);
  }, [props.index]);
  return (
    <WrapperPage 
    header={PRICING}
    title={PRICING_TITLE}
    description={PRICING_DESCRIPTION}>
      <Switch {...props} />
      <CardsSection style={{ marginTop: 40 }} cards={list}/>
    </WrapperPage>
  );
};

export default Plans;
