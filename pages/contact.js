import Navbar from "../components/Navbar";
import indexTheme from "../themes/indexTheme";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import PageSection from "../components/PageSection";
import Page from "../components/Page";
import MainHeading from "../components/MainHeading";
import { Grommet } from "grommet";

const Contact = () => {
  return (
    <Grommet full theme={indexTheme}>
      <Page>
        <PageSection>
          <Wrapper>
            <Container>
              <Navbar />
              <MainHeading>CONTACT PAGE.</MainHeading>
            </Container>
          </Wrapper>
        </PageSection>
      </Page>
    </Grommet>
  );
};

export default Contact;
