import { Box } from "grommet";

const PageSection = ({ children, background, ...args }) => {
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
      pad={{ left: "xlarge", right: "xlarge", bottom: "xlarge" }}
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
