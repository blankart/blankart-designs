import { Box } from "grommet";

const Container = ({ children, ...args }) => {
  return (
    <Box
      align="center"
      justify="center"
      pad={{ right: "xlarge", left: "xlarge" }}
      {...args}
    >
      {children}
    </Box>
  );
};

export default Container;
