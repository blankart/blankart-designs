import { Box, ResponsiveContext, Text, Image, Paragraph } from "grommet";
import { useContext, useState } from "react";

const ServiceItem = ({ src, title, content, ...args }) => {
  const size = useContext(ResponsiveContext);
  const [boxStyle, setBoxStyle] = useState({});
  const handleHover = () => {
    setBoxStyle({
      transition: "transform 0.1s ease-in",
      transform: "translateY(-15px)",
    });
  };
  const handleMouseLeave = () => {
    setBoxStyle({
      transition: "transform 0.1s ease-in",
      transform: "translateY(0px)",
    });
  };
  return (
    <Box
      {...args}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      style={boxStyle}
      align="center"
      justify="center"
      gap="small"
      width="medium"
    >
      <Image
        src={src}
        style={{
          width:
            size === "small" ? "120px" : size === "medium" ? "160px" : null,
        }}
      />
      <Text
        color="background"
        size={
          size === "large" ? "xxlarge" : size === "medium" ? "xlarge" : "large"
        }
        weight="bold"
        textAlign="center"
      >
        {title}
      </Text>
      <Paragraph size={size} color="dark-4" textAlign="center">
        {content}
      </Paragraph>
    </Box>
  );
};

export default ServiceItem;
