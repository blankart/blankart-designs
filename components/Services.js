import { Box, ResponsiveContext } from "grommet";
import { useContext, useMemo } from "react";
import ServiceItem from "./ServiceItem";

const Services = ({ data, ...args }) => {
  const size = useContext(ResponsiveContext);
  const slicedData = useMemo(() => {
    let newArr = [];
    if (data.length < 2) return [data];
    for (var i = 0; i * 2 <= data.length; i++)
      newArr.push(data.slice((i - 1) * 2, i * 2));
    return newArr;
  }, [data]);
  return (
    <React.Fragment>
      {slicedData &&
        size !== "large" &&
        slicedData.map((newData) => (
          <Box
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
      {data && size === "large" && (
        <Box
          flex={true}
          align="center"
          justify="center"
          width="xxlarge"
          direction={size === "large" || size === "medium" ? "row" : "column"}
          gap="xlarge"
        >
          {data &&
            data.map((service) => (
              <ServiceItem
                key={service.title}
                src={service.image}
                title={service.title}
                content={service.content}
              />
            ))}
        </Box>
      )}
    </React.Fragment>
  );
};

export default Services;
