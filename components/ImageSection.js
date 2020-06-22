import { Box, ResponsiveContext } from "grommet";
import { useContext } from "react";

const ImageSection = ({ children, ...args }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      align="center"
      justify="center"
      direction={size === "large" ? "row" : "column"}
      wrap={false}
      gap="large"
      style={{ marginTop: "-25px" }}
      {...args}
    >
      {children}
    </Box>
  );
};

export default ImageSection;
