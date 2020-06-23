import { Box, ResponsiveContext, Text, Paragraph } from "grommet";
import { useContext, useState } from "react";
import usePortfolioHover from "../hooks/usePortfolioHover";
import Link from "next/link";

const PortfolioItem = ({ image, description, index, label, ...args }) => {
  const size = useContext(ResponsiveContext);
  const url = React.useMemo(
    () => require(`../markdown/Portfolio/${label}/${image}`),
    [label, image]
  );
  const [hoverStyle, hoverBinder, hovered] = usePortfolioHover(url);

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
          ...hoverStyle,
        }}
        {...hoverBinder}
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
