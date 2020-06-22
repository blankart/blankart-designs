import { Box, ResponsiveContext } from "grommet";
import { useContext, useMemo } from "react";

const CardImage = ({ src, ...args }) => {
  const size = useContext(ResponsiveContext);
  const dimension = useMemo(
    () => ({
      height: size === "medium" ? "400px" : "600px",
      width: size === "medium" ? "1200px" : "450px",
    }),
    [size]
  );
  return (
    <Box
      align="center"
      justify="center"
      style={{
        ...dimension,
        overflow: "visible",
      }}
      background={{
        image: `url('${src}')`,
        size: "1000px",
        position: "center",
      }}
      round="medium"
      elevation="xlarge"
      hoverIndicator={false}
      overflow="visible"
      flex="grow"
      {...args}
    />
  );
};

export default CardImage;
