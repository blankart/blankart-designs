import { Button } from "grommet";
import useHoverLift from "../hooks/useHoverLift";
import { useRouter } from "next/router";
import { useMemo } from "react";

const NavLink = ({ label, path, ...args }) => {
  const router = useRouter();
  const [hoverStyle, hoverBinder] = useHoverLift("-5px");
  const activeStyle = useMemo(() => {
    if (path === "/") {
      if (path === router.asPath) {
        return {
          backgroundImage:
            "-webkit-linear-gradient( 0deg, rgb(110,40,54) 0%, rgb(200,150,100) 0%, rgb(160,71,126) 99%)",
          color: "white",
          border: "none",
          borderRadius: "10px",
        };
      }
    } else if (router.asPath.includes(path)) {
      return {
        backgroundImage:
          "-webkit-linear-gradient( 0deg, rgb(110,40,54) 0%, rgb(200,150,100) 0%, rgb(160,71,126) 99%)",
        color: "white",
        border: "none",
        borderRadius: "10px",
      };
    }
    return {};
  }, [path, router]);

  return (
    <Button
      {...hoverBinder}
      label={label}
      active={false}
      gap="small"
      hoverIndicator={false}
      plain={false}
      style={{
        ...hoverStyle,
        color: "white",
        border: "none",
        ...activeStyle,
      }}
      {...args}
    />
  );
};

export default NavLink;
