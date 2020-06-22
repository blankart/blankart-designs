import { Box, ResponsiveContext } from "grommet";
import { useContext } from "react";

const SideText = ({ children, ...args }) => {
  return (
    <Box
      align="center"
      justify="center"
      gap="large"
      pad={{ top: "xlarge" }}
      {...args}
    >
      {children}
    </Box>
  );
};

export default SideText;
