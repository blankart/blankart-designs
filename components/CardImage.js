import { Layer, Carousel, Box, ResponsiveContext, Image } from "grommet";
import { useContext, useMemo, useState } from "react";
import Container from "./Container";
import { Close } from "grommet-icons";

const CardImage = ({ src, controls, ...args }) => {
  const size = useContext(ResponsiveContext);
  const dimension = useMemo(
    () => ({
      height: size === "medium" ? "400px" : "600px",
      width: size === "medium" ? "1200px" : "450px",
    }),
    [size]
  );
  const [onShow, setOnShow] = useState(false);
  const [image, setImage] = useState(null);
  return (
    <Box fill={size === "small" ? false : "horizontal"} overflow="hideen">
      {onShow && (
        <Layer
          onEsc={() => setOnShow(false)}
          animation="fadeIn"
          plain={true}
          full={true}
          style={{
            backgroundColor: "#0e0e0e",
          }}
          responsive={false}
        >
          <Container align="center" pad="xlarge" justify="center">
            <Box
              onClick={() => setOnShow(false)}
              focusIndicator={false}
              animation="slideUp"
              background={{
                color: "black",
              }}
              style={{
                position: "absolute",
                zIndex: "999",
                right: "10px",
                top: "10px",
              }}
            >
              <Close color="white" size="large" />
            </Box>
            <Image
              style={{
                maxHeight: "100vh",
              }}
              alignSelf="center"
              src={image}
            />
          </Container>
        </Layer>
      )}
      <Carousel controls={controls} play={8000}>
        {src &&
          src.map((image) => (
            <Box
              align="center"
              justify="start"
              style={{
                ...dimension,
                overflow: "visible",
              }}
              background={{
                image: `url('${image}')`,
                size: "1500px",
                position: "center",
              }}
              round="medium"
              elevation="xlarge"
              hoverIndicator={false}
              overflow="hidden"
              flex="grow"
              {...args}
            >
              <Box
                overflow="hidden"
                fill="horizontal"
                style={{
                  position: "absolute",
                  zIndex: "1",
                  height: "700px",
                }}
                background={{
                  color: "black",
                  opacity: "0",
                }}
              >
                <a
                  onClick={() => {
                    setOnShow(true);
                    setImage(image);
                  }}
                >
                  <Box
                    fill={true}
                    style={{
                      position: "absolute",
                      zIndex: "1",
                    }}
                    background={{
                      color: "black",
                      opacity: "0",
                    }}
                  ></Box>
                </a>
              </Box>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default CardImage;
