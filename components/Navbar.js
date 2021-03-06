import {
  Nav,
  Box,
  Layer,
  Button,
  Image,
  ResponsiveContext,
  Text,
} from "grommet";
import { Close, Menu } from "grommet-icons";
import { useContext, useState } from "react";
import useHoverLift from "../hooks/useHoverLift";
import Link from "next/link";
import NavLink from "./NavLink";
import Wrapper from "./Wrapper";
import Page from "./Page";
import Container from "./Container";

const items = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Showcase",
    path: "/showcase",
  },
];

const Navbar = () => {
  const size = useContext(ResponsiveContext);
  const [hoverStyle, hoverBinder] = useHoverLift("-5px");
  const [onShow, setOnShow] = useState(false);
  return (
    <Nav
      animation="slideUp"
      align="center"
      flex={false}
      justify="center"
      direction="row"
      width="xxlarge"
      pad={{ horizontal: "xsmall", top: "large", bottom: "large" }}
    >
      {onShow && size !== "large" && (
        <Layer
          onEsc={() => setOnShow(false)}
          full={true}
          animation="fadeIn"
          plain={true}
          style={{
            backgroundColor: "#0e0e0e",
            position: "absolute",
            zIndex: "1000",
          }}
          responsive={false}
        >
          <Page justify="center">
            <Wrapper align="center" pad="xlarge">
              <Container align="center" pad="xlarge">
                <Box
                  onClick={() => setOnShow(false)}
                  focusIndicator={false}
                  animation={["fadeIn"]}
                  pad="xlarge"
                >
                  <Close color="white" size="large" />
                </Box>
                {items &&
                  items.map((item, index) => (
                    <Link href={item.path}>
                      <Box
                        focusIndicator={false}
                        align="center"
                        animation={{
                          type: "fadeIn",
                          delay: 100 * index,
                        }}
                      >
                        <Text
                          margin="large"
                          style={{
                            fontSize: "35px",
                            textAlign: "center",
                          }}
                          color="background-front"
                        >
                          {item.label}
                        </Text>
                      </Box>
                    </Link>
                  ))}
                <a
                  href="mailto:blankartwp@gmail.com?subject=Inquiries:%20Blankart%20Designs"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Box
                    focusIndicator={false}
                    align="center"
                    animation={{
                      type: "fadeIn",
                      delay: 100 * items.length,
                    }}
                  >
                    <Text
                      margin="large"
                      style={{
                        fontSize: "35px",
                        textAlign: "center",
                      }}
                      color="background-front"
                    >
                      Hire Us
                    </Text>
                  </Box>
                </a>
              </Container>
            </Wrapper>
          </Page>
        </Layer>
      )}
      <Box align="center" justify="center">
        <Link href="/">
          <a>
            <Image
              src="/Logo-Page.png"
              style={{ width: size === "small" ? "25px" : null }}
              fill="horizontal"
            />
          </a>
        </Link>
      </Box>
      <Box
        align="center"
        justify="end"
        fill="horizontal"
        direction="row"
        pad="xsmall"
        gap="medium"
      >
        {items &&
          size === "large" &&
          items.map((item) => (
            <Link key={item.path} href={item.path}>
              <a>
                <NavLink path={item.path} label={item.label} />
              </a>
            </Link>
          ))}
        <a href="mailto:blankartwp@gmail.com?subject=Inquiries:%20Blankart%20Designs">
          <Button
            label="HIRE US"
            {...hoverBinder}
            active={false}
            gap="medium"
            hoverIndicator={false}
            plain={false}
            style={{
              ...hoverStyle,
              backgroundColor: "#0e0e0e",
              color: "white",
              borderRadius: "10px",
              fontWeight: "600",
              backgroundImage:
                "-webkit-linear-gradient( 0deg, rgb(140,72,54) 0%, rgb(255,50,50) 0%, rgb(239,71,126) 99%)",
            }}
            reverse={false}
            secondary={false}
            disabled={false}
            color="status-critical"
            primary={false}
            size={size === "small" ? "xsmall" : "medium"}
          />
        </a>
        {size !== "large" && (
          <Box onClick={() => setOnShow(true)}>
            <Menu color="white" size="medium" />
          </Box>
        )}
      </Box>
    </Nav>
  );
};

export default Navbar;
