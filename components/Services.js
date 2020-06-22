import { Box, ResponsiveContext } from "grommet";
import { useContext, useMemo } from "react";
import ServiceItem from "./ServiceItem";

const Services = ({ data, ...args }) => {
  const size = useContext(ResponsiveContext);
  const slicedData = useMemo(() => {
    let newArr = [];
    if (data.length < 2) return [data];
    for (var i = 0; i < data.length; i += 2) newArr.push(data.slice(i, i + 2));
    return newArr;
  }, [data]);
  const largeSlicedData = useMemo(() => {
    let newArr = [];
    if (data.length < 4) return [data];
    for (var i = 0; i < data.length; i += 4) newArr.push(data.slice(i, i + 4));
    return newArr;
  }, [data]);

  return (
    <React.Fragment>
      {largeSlicedData &&
        size === "large" &&
        largeSlicedData.map((newData) => (
          <Box
            {...args}
            key={JSON.stringify(newData)}
            flex={true}
            width="xxlarge"
            direction={size === "large" || size === "medium" ? "row" : "column"}
            gap="xlarge"
          >
            {newData &&
              newData.map((service) => (
                <ServiceItem
                  key={service.title}
                  src={service.image}
                  title={service.title}
                  content={service.content}
                />
              ))}
          </Box>
        ))}
      {slicedData &&
        size !== "large" &&
        slicedData.map((newData) => (
          <Box
            {...args}
            key={JSON.stringify(newData)}
            flex={true}
            align="center"
            justify="center"
            width="xxlarge"
            direction={size === "large" || size === "medium" ? "row" : "column"}
            gap="xlarge"
          >
            {newData &&
              newData.map((service) => (
                <ServiceItem
                  key={service.title}
                  src={service.image}
                  title={service.title}
                  content={service.content}
                />
              ))}
          </Box>
        ))}
    </React.Fragment>
  );
};

export default Services;
