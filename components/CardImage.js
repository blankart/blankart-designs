import { Box } from "grommet";

const CardImage = ({ src, ...args }) => {
  return (
    <Box
      align="center"
      justify="center"
      style={{
        height: "600px",
        width: "450px",
        overflow: "visible",
      }}
      background={{
        image: `url('${src}')`,
        size: "1000px",
        position: "top",
      }}
      round="medium"
      elevation="xlarge"
      hoverIndicator={false}
      overflow="visible"
      flex="grow"
    />
  );
};

export default CardImage;
