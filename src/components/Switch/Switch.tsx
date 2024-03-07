import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { IPlansProps } from '../Plans/Plans';
import React, { FC } from "react";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: #2D3748;
`;

interface ISwitchButton {
  clicked: boolean;
};

const Button = styled.div<ISwitchButton>`
  background: ${(props) => (props.clicked ? "#90cdf4" : "#2D3748")};
  border: ${(props) => (props.clicked ? "3px solid white" : "none")};
  padding: 10px 40px;
  border-radius: 15px;
  cursor: pointer;
  transition: background 0.3s ease;
`;

interface TSwitchProps extends IPlansProps { styles?: any; };

const Switch: FC<TSwitchProps> = (props: TSwitchProps) => {
    const { handleClick, plans } = props;
  return (
    <Section>
      {plans.map((button) => (
        <Button
          onClick={() => handleClick(button.label)}
          clicked={button.clicked}
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="semibold"
            color={button.clicked ? "#171923" : "white"}
          >
            {button.label}
          </Text>
          <Text fontSize={12} color={button.clicked ? "#171923" : "white"}>
            {button.description}
          </Text>
        </Button>
      ))}
    </Section>
  );
};

export default Switch;
