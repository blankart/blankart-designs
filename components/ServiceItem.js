import { Box, ResponsiveContext, Text, Image, Paragraph } from "grommet";
import useHoverLift from "../hooks/useHoverLift";
import { useContext } from "react";

const ServiceItem = ({ src, title, content, ...args }) => {
  const size = useContext(ResponsiveContext);
  const [hoverStyle, hoverBinder] = useHoverLift();
  return (
    <Box
      {...args}
      {...hoverBinder}
      align="center"
      justify="start"
      gap="small"
      width="medium"
      style={hoverStyle}
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
