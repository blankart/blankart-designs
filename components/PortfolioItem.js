import { Box, ResponsiveContext, Text, Paragraph } from "grommet";
import { useContext, useState } from "react";
import Link from "next/link";

const PortfolioItem = ({ image, description, index, label, ...args }) => {
  const size = useContext(ResponsiveContext);
  const [tempStyle, setTempStyle] = useState({});
  const [hovered, setHovered] = useState(false);
  const url = React.useMemo(
    () => require(`../markdown/Portfolio/${label}/${image}`),
    [label, image]
  );

  const binder = {
    onMouseEnter: () => {
      setHovered(true);
      setTempStyle({
        transition: "background-size 0.5s ",
        backgroundSize: "1000px",
        backgroundColor: "white",
        backgroundImage: `url('${url}')`,
        backgroundPosition: "center",
      });
    },
    onMouseLeave: () => {
      setHovered(false);
      setTempStyle({
        transition: "background-size 0.3s ",
        backgroundSize: "800px",
        backgroundColor: "white",
        backgroundImage: `url('${url}')`,
        backgroundPosition: "center",
      });
    },
  };
  return (
    <Link href={`/showcase/${label}`}>
      <Box
        {...args}
        align="center"
        justify="center"
        style={{
          backgroundSize: "800px",
          backgroundColor: "white",
          backgroundImage: `url('${url}')`,
          backgroundPosition: "center",
          height: "300px",
          width:
            size === "medium" ? "300px" : size === "large" ? "370px" : "450px",
          ...tempStyle,
        }}
        {...binder}
        round="medium"
        elevation="xlarge"
        hoverIndicator={false}
        flex="grow"
      >
        {hovered && (
          <Box
            fill={true}
            align="center"
            justify="center"
            background={{ image: "url(/opacity-fill.png)" }}
          >
            <Text
              textAlign="center"
              color="background-front"
              style={{ fontWeight: "500", fontSize: "30px", opacity: "1" }}
            >
              {label}
            </Text>
            <Paragraph textAlign="center" color="background-front">
              {description}
            </Paragraph>
          </Box>
        )}
      </Box>
    </Link>
  );
};

export default PortfolioItem;
