import { ResponsiveContext, Carousel, Box, Image, Paragraph } from "grommet";
import { useContext } from "react";

const Testimonials = ({ data, ...args }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Carousel pad="large" controls="selectors" play={5000}>
      {data &&
        data.map((testimonial) => (
          <Box
            align="center"
            style={{
              maxWidth: "700px",
            }}
            height="medium"
            justify="center"
            margin="xlarge"
          >
            <Image
              src={testimonial.image}
              style={{
                width: "100px",
              }}
            />
            <Paragraph
              margin="xxlarge"
              style={{
                fontStyle: "italic",
              }}
              fill="horizontal"
              size={size}
              color="dark-4"
              textAlign="center"
            >
              "{testimonial.message}"
            </Paragraph>
            <Paragraph
              margin="xxlarge"
              fill="horizontal"
              size={size}
              color="background-front"
              textAlign="center"
            >
              {testimonial.author}
            </Paragraph>
          </Box>
        ))}
    </Carousel>
  );
};

export default Testimonials;
