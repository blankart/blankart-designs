import { ResponsiveContext, Box } from "grommet";
import { useContext, useMemo } from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = ({ data, ...args }) => {
  const size = useContext(ResponsiveContext);
  const largeSlicedData = useMemo(() => {
    let columns = size === "large" ? 3 : size === "medium" ? 2 : 1;
    let newArr = [];
    if (data.length < columns) return [data];
    for (var i = 0; i < data.length; i += columns)
      newArr.push(data.slice(i, i + columns));
    return newArr;
  }, [data, size]);
  return (
    <Box
      pad="large"
      margin="large"
      direction="column"
      align="center"
      justify="start"
      gap="large"
    >
      {largeSlicedData &&
        largeSlicedData.map((category) => (
          <Box
            {...args}
            key={JSON.stringify(category)}
            flex={true}
            direction={size === "large" || size === "medium" ? "row" : "column"}
            gap="large"
          >
            {category &&
              category.map((cat, index) => (
                <PortfolioItem
                  key={cat.label}
                  index={index}
                  image={cat.image}
                  label={cat.label}
                  description={cat.description}
                />
              ))}
          </Box>
        ))}
    </Box>
  );
};

export default Portfolio;
