import { Box, ResponsiveContext } from "grommet";
import { useContext, useMemo } from "react";

const PageSection = ({ children, background, ...args }) => {
  const size = useContext(ResponsiveContext);
  const responsiveSize = useMemo(
    () => (size === "large" ? "large" : size === "medium" ? "large" : "medium"),
    [size]
  );
  const style = background
    ? {
        style: {
          backgroundImage: `url('${background}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
      }
    : {};
  return (
    <Box
      align="center"
      justify="center"
      pad={{
        left: responsiveSize,
        right: responsiveSize,
        bottom: responsiveSize,
      }}
      overflow="auto"
      direction="row-responsive"
      {...style}
      {...args}
    >
      {children}
    </Box>
  );
};

export default PageSection;
