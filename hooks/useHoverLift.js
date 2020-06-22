import { useState } from "react";

const useHoverLift = (translate = "-15px") => {
  const [val, setter] = useState({});
  const handleHover = () => {
    setter({
      transition: "transform 0.1s ease-in",
      transform: `translateY(${translate})`,
    });
  };
  const handleMouseLeave = () => {
    setter({
      transition: "transform 0.1s ease-in",
      transform: "translateY(0px)",
    });
  };
  const binder = {
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
  };

  return [val, binder];
};

export default useHoverLift;
