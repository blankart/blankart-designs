import { Button } from "grommet";
import useHoverLift from "../hooks/useHoverLift";

const NavLink = ({ label, ...args }) => {
  const [hoverStyle, hoverBinder] = useHoverLift("-5px");
  return (
    <Button
      {...hoverBinder}
      style={hoverStyle}
      label={label}
      active={false}
      gap="small"
      hoverIndicator={false}
      plain={true}
      color="background"
    />
  );
};

export default NavLink;
