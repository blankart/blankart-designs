import { Box, Text, Paragraph, ResponsiveContext } from "grommet";
import { useContext } from "react";

const BlockText = ({ title, content, width, ...args }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      align={size === "small" ? "center" : "start"}
      justify="center"
      fill="horizontal"
      //   width={size === "small" ? "large" : width}
      {...args}
    >
      <Text
        color="background-front"
        style={{
          fontFamily: "Montserrat Black, Montserrat",
          fontSize:
            size === "small" ? "28px" : size === "medium" ? "45px" : "60px",
        }}
        textAlign="center"
        size="xlarge"
      >
        {title}
      </Text>
      <Paragraph fill="horizontal" size={size} color="dark-4" textAlign="start">
        {content}
      </Paragraph>
    </Box>
  );
};

export default BlockText;
