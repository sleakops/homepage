import {
  Box,
  Center,
  Container,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as logos from "../../constants/LogosData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Clients = () => {
  return (
    <Container px={{ base: "6", md: "8" }}>
      <Box
        bg="bg.surface"
        py={{ base: "12", md: "16" }}
        borderRadius="lg"
        boxShadow="sm"
      >
        <Stack spacing="8">
          <Text
            mb={-5}
            fontWeight="medium"
            fontSize={{ base: "md", md: "lg" }}
            color="fg.muted"
            textAlign="center"
          >
            These and other companies trust us
          </Text>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={1000}
            centerMode={true}
            className=""
            containerClass="container-with-dots"
            customTransition="all 1s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 360,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
            transitionDuration={1000}
          >
            {Object.entries(logos).map(([name, img]) => (
              <Center h={40} w={150} key={name}>
                <Img style={{ objectFit: 'contain' }} src={img.src}/>
              </Center>
            ))}
          </Carousel>
        </Stack>
      </Box>
    </Container>
  );
};
