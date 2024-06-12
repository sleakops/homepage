import { Button } from "@chakra-ui/react";
import Link from "next/link";

function BookDemoButton(props:any) {
  return (
    <>
      <Link href="/bookdemo">
        <Button {...props}>Request Demo</Button>
      </Link>
    </>
  );
}

export default BookDemoButton;