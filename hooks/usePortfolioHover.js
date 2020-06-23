import { useState } from "react";

const usePortfolioHover = (url) => {
  const [hoverStyle, setHoverStyle] = useState({});
  const [hovered, setHovered] = useState(false);
  const binder = {
    onMouseEnter: () => {
      setHovered(true);
      setHoverStyle({
        transition: "background-size 0.5s ",
        backgroundSize: "1000px",
        backgroundColor: "white",
        backgroundImage: `url('${url}')`,
        backgroundPosition: "center",
      });
    },
    onMouseLeave: () => {
      setHovered(false);
      setHoverStyle({
        transition: "background-size 0.3s ",
        backgroundSize: "800px",
        backgroundColor: "white",
        backgroundImage: `url('${url}')`,
        backgroundPosition: "center",
      });
    },
  };

  return [hoverStyle, binder, hovered];
};

export default usePortfolioHover;
