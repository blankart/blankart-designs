import { Box } from "grommet";

const Page = ({ children, ...args }) => {
  return (
    <Box
      overflow="auto"
      align="stretch"
      background={{ dark: false, color: "black" }}
      style={{ backgroundColor: "#0e0e0e" }}
      hoverIndicator={false}
      wrap={false}
      justify="end"
      direction="column"
    >
      {children}
    </Box>
  );
};

export default Page;
