import Wrapper from "./Wrapper";
import PageSection from "./PageSection";
import { Text } from "grommet";
import Link from "next/link";

const Footer = ({ ...args }) => {
  return (
    <PageSection
      pad={{ top: "large" }}
      justify="center"
      align="end"
      style={{ backgroundColor: "#2b141a", marginTop: "0" }}
      {...args}
    >
      <Wrapper justify="end">
        <Text color="background-front">
          Copyright © 2020 Blankart Designs. All Rights Reserved. Visit my{" "}
          <a
            href="https://www.upwork.com/freelancers/~01920e7fc00e054f37"
            style={{
              fontWeight: "500",
              color: "white",
              textDecoration: "none",
            }}
          >
            Upwork Profile
          </a>
        </Text>
      </Wrapper>
    </PageSection>
  );
};

export default Footer;
