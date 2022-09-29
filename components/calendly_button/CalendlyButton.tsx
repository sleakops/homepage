import { Button, Box } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { PopupButton } from "react-calendly"


export const Calendly = (props) => {
  const [root, set_root] = useState(null)
  const buttonRef = useRef(null);

  useEffect(() => {
    set_root(document.getElementById('__next'))
  }, [])

  const bookClick = () => {
    buttonRef.current.setState({isOpen: true})
  }

  if (root) {
    return (
      <>
        <Button {... props} onClick={bookClick}>
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
}