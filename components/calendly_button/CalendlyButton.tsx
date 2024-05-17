import { Button, Box, ButtonProps, OmitCommonProps } from "@chakra-ui/react";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
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
        <Link href="/bookdemo">
          <Button {...props}>BOOK A DEMO</Button>
        </Link>

        {/* <Button {...props} onClick={bookClick}>
          BOOK A DEMO
        </Button>
        <Box display="none">
          <PopupButton
            url="https://calendly.com/d/25s-6js-xvh/sleakops-demo-45m"
            rootElement={root}
            text="BOOK A DEMO"
            ref={buttonRef}
          />
        </Box> */}
      </>
    );
  }
  return <></>;
};
