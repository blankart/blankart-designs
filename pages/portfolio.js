import Navbar from "../components/Navbar";
import indexTheme from "../themes/indexTheme";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import PageSection from "../components/PageSection";
import Page from "../components/Page";
import MainHeading from "../components/MainHeading";
import { Grommet } from "grommet";

const Portfolio = () => {
  return (
    <Grommet full theme={indexTheme}>
      <Page>
        <PageSection background="/BG.png">
          <Wrapper>
            <Container>
              <Navbar />
              <MainHeading>PORTFOLIO PAGE.</MainHeading>
            </Container>
          </Wrapper>
        </PageSection>
      </Page>
    </Grommet>
  );
};

export default Portfolio;
