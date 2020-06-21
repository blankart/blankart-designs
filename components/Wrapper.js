import { Box } from "grommet";

const Wrapper = ({ children, ...args }) => {
  return (
    <Box
      align="center"
      justify="center"
      pad={{ left: "xlarge", right: "xlarge" }}
      {...args}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
