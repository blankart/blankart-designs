import Head from "next/head";
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
    <React.Fragment>
      <Head>
        <title>Contact Us - Blankart Designs</title>
      </Head>
      <Grommet full theme={indexTheme}>
        <Page>
          <PageSection background="/BG.png">
            <Wrapper>
              <Container>
                <Navbar />
                <MainHeading animation="fadeIn">CONTACT PAGE.</MainHeading>
              </Container>
            </Wrapper>
          </PageSection>
        </Page>
      </Grommet>
    </React.Fragment>
  );
};

export default Contact;
