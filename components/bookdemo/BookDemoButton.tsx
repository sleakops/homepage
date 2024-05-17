import { Button } from "@chakra-ui/react";
import Link from "next/link";

function BookDemoButton(props:any) {
  return (
    <>
      <Link href="/bookdemo">
        <Button {...props}>BOOK A DEMO</Button>
      </Link>
    </>
  );
}

export default BookDemoButton;