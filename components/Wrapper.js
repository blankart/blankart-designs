import { Box, ResponsiveContext } from "grommet";
import { useContext, useMemo } from "react";

const Wrapper = ({ children, ...args }) => {
  const size = useContext(ResponsiveContext);
  const responsiveSize = useMemo(
    () => (size === "large" ? "large" : size === "medium" ? "large" : "medium"),
    [size]
  );
  return (
    <Box
      width="xxlarge"
      align="center"
      justify="center"
      pad={{
        left: responsiveSize,
        right: responsiveSize,
        bottom: responsiveSize,
      }}
      {...args}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
