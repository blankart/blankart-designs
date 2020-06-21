import { Nav, Box, Button, Image } from "grommet";
import Link from "next/link";

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
        <Image src="/Logo-Page.png" fill="horizontal" />
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
          items.map((item) => (
            <Link key={item.path} href={item.path}>
              <Button
                label={item.label}
                active={false}
                gap="small"
                hoverIndicator={false}
                plain={true}
                color="background"
              />
            </Link>
          ))}
        <Button
          label="HIRE US"
          active={false}
          gap="medium"
          hoverIndicator={false}
          plain={false}
          style={{
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
        />
      </Box>
    </Nav>
  );
};

export default Navbar;
