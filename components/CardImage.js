import { Carousel, Box, ResponsiveContext } from "grommet";
import { useContext, useMemo } from "react";

const CardImage = ({ src, controls, ...args }) => {
  const size = useContext(ResponsiveContext);
  const dimension = useMemo(
    () => ({
      height: size === "medium" ? "400px" : "600px",
      width: size === "medium" ? "1200px" : "450px",
    }),
    [size]
  );
  return (
    <Box fill={size === "small" ? false : "horizontal"}>
      <Carousel controls={controls} play={8000}>
        {src &&
          src.map((image) => (
            <Box
              align="center"
              justify="center"
              style={{
                ...dimension,
                overflow: "visible",
              }}
              background={{
                image: `url('${image}')`,
                size: "1500px",
                position: "center",
              }}
              round="medium"
              elevation="xlarge"
              hoverIndicator={false}
              overflow="visible"
              flex="grow"
              {...args}
            />
          ))}
      </Carousel>
    </Box>
  );
};

export default CardImage;
