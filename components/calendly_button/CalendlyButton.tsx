import { Button, Box, ButtonProps, OmitCommonProps } from "@chakra-ui/react";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useRef,
  useState,
} from "react";
import { PopupButton } from "react-calendly";

export const Calendly = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      keyof ButtonProps
    > &
    ButtonProps & { as?: "button" | undefined }
) => {
  const [root, set_root] = useState<any | null>(null);
  const buttonRef = useRef<any | null>(null);

  useEffect(() => {
    const element = document.getElementById("__next");
    set_root(element);
  }, []);

  const bookClick = () => {
    if (buttonRef?.current) {
      buttonRef.current.setState({ isOpen: true });
    }
  };

  if (root) {
    return (
      <>
        <Button {...props} onClick={bookClick}>
          BOOK A DEMO
        </Button>
        <Box display="none">
          <PopupButton
            url="https://calendly.com/fran-sleakops/demo-sleakops"
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            rootElement={root}
            text="BOOK A DEMO"
            ref={buttonRef}
          />
        </Box>
      </>
    );
  }
  return <></>;
};
