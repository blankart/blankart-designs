import { Heading, Box, ResponsiveContext } from "grommet";
import { useContext, useMemo } from "react";

const MainHeading = ({ children, ...args }) => {
  const size = useContext(ResponsiveContext);
  const fontSize = useMemo(
    () => (size === "large" ? "100px" : size === "medium" ? "90px" : "70px"),
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
      pad={{ top: "large" }}
    >
      <Heading
        style={{
          fontFamily: "Montserrat Black",
          fontSize,
          background:
            "-webkit-linear-gradient( 0deg, rgb(140,72,54) 0%, rgb(255,50,50) 0%, rgb(239,71,126) 99%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: size !== "large" ? "center" : null,
        }}
        level="1"
        truncate={false}
        size="large"
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

export default MainHeading;
