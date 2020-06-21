import { Box } from "grommet";

const PageSection = ({ children, ...args }) => {
  return (
    <Box
      align="center"
      justify="center"
      pad={{ left: "xlarge", right: "xlarge", bottom: "xlarge" }}
      overflow="auto"
      direction="row-responsive"
      {...args}
    >
      {children}
    </Box>
  );
};

export default PageSection;
