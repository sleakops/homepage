import { Accordion, Faqs, Head, Plans, PlansContact } from 'components';
import { PRICING } from 'constants/consts';
import { plansPrices } from 'constants/plansPrices';
import titles from 'constants/titles';
import React, { FC, useState } from 'react';

const Pricing: FC = () => {
    const [plans, setPlans] = useState(plansPrices);
    const [index, setIndex] = useState<number>(0);
    const handleClick = (itemLabel: string) => {
        const array = plans.map((item) => {
        if (itemLabel === item.label) {
            setIndex(item.index);
            return { ...item, clicked: true};
        };
        return { ...item, clicked: false };
        });
        setPlans(array);
    };
    return (
        <>
            <Head title={titles[PRICING]}/>
            <Plans index={index} plans={plans} handleClick={handleClick}/>
            <Faqs/>
            <PlansContact/>
        </>

    )
};

export default Pricing;