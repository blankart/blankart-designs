import { Heading, Box, ResponsiveContext } from "grommet";
import { useContext, useMemo } from "react";

const Subheading = ({ children, ...args }) => {
  const size = useContext(ResponsiveContext);
  const fontSize = useMemo(
    () => (size === "large" ? "50px" : size === "medium" ? "40px" : "25px"),
    [size]
  );
  const justify = useMemo(() => (size === "large" ? "start" : "center"), [
    size,
  ]);
  return (
    <Box
      align="stretch"
      justify={justify}
      width="xxlarge"
      direction="row"
      {...args}
      pad={{ bottom: "small" }}
    >
      <Heading
        style={{
          fontFamily: "sans-serif",
          letterSpacing: "2px",
          fontWeight: "20",
          color: "white",
          fontSize,
          textAlign: size !== "large" ? "center" : null,
        }}
        level="1"
        truncate={false}
        size="medium"
      >
        {children}
      </Heading>
      {size === "large" && (
        <Box
          align="center"
          justify="center"
          fill="horizontal"
          direction="column"
        />
      )}
    </Box>
  );
};

export default Subheading;
