import { Heading, Box } from "grommet";

const MainHeading = ({ children, ...args }) => {
  return (
    <Box
      align="stretch"
      justify="start"
      width="xxlarge"
      direction="row"
      pad={{ top: "large" }}
    >
      <Heading
        style={{
          fontFamily: "Montserrat Black",
          fontSize: "100px",
          background:
            "-webkit-linear-gradient( 0deg, rgb(140,72,54) 0%, rgb(255,50,50) 0%, rgb(239,71,126) 99%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        level="1"
        truncate={false}
        size="large"
      >
        {children}
      </Heading>
      <Box
        align="center"
        justify="center"
        fill="horizontal"
        direction="column"
      />
    </Box>
  );
};

export default MainHeading;
