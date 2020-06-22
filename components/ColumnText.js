import { Box, ResponsiveContext } from "grommet";
import { useContext } from "react";

const ColumnText = ({ children, ...args }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      align="start"
      justify="start"
      direction={size === "small" ? "column" : "row"}
    >
      {children}
    </Box>
  );
};

export default ColumnText;
