import { Nav, Box, Button, Image, ResponsiveContext } from "grommet";
import { useContext } from "react";
import useHoverLift from "../hooks/useHoverLift";
import Link from "next/link";
import NavLink from "./NavLink";

const items = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const size = useContext(ResponsiveContext);
  const [hoverStyle, hoverBinder] = useHoverLift("-5px");
  return (
    <Nav
      align="center"
      flex={false}
      justify="center"
      direction="row"
      width="xxlarge"
      pad={{ horizontal: "xsmall", top: "large", bottom: "large" }}
    >
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
                <NavLink label={item.label} />
              </a>
            </Link>
          ))}
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
      </Box>
    </Nav>
  );
};

export default Navbar;
