import { Grommet, Box, Text, Paragraph } from "grommet";
import indexTheme from "../themes/indexTheme";
import Navbar from "../components/Navbar";
import PageSection from "../components/PageSection";
import MainHeading from "../components/MainHeading";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import CardImage from "../components/CardImage";
import Page from "../components/Page";
import Head from "next/head";
import Services from "../components/Services";
import ImageSection from "../components/ImageSection";
import SideText from "../components/SideText";
import BlockText from "../components/BlockText";
import ColumnText from "../components/ColumnText";

const servicesList = [
  {
    title: "T-Shirt Designs",
    image: "/T-Shirt Icon.png",
    content:
      "Sample text here. Sample text here. Sample text here. Sampletext here. Sample text here. Sample text here.",
  },
  {
    title: "UI/UX Design",
    image: "/Web Development.png",
    content:
      "Sample text here. Sample text here. Sample text here. Sampletext here. Sample text here. Sample text here.",
  },
  {
    title: "React Development",
    image: "/NodeReactJS Development.png",
    content:
      "Sample text here. Sample text here. Sample text here. Sampletext here. Sample text here. Sample text here.",
  },
  {
    title: "Node Development",
    image: "/NodeReactJS Development.png",
    content:
      "Sample text here. Sample text here. Sample text here. Sampletext here. Sample text here. Sample text here.",
  },
];

const Index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Blankart Designs</title>
      </Head>
      <Grommet full theme={indexTheme}>
        <Page>
          <PageSection background="/BG.png">
            <Wrapper>
              <Container>
                <Navbar />
                <MainHeading>DIGITAL ENTHUSIAST. </MainHeading>
                <Services data={servicesList} />
              </Container>
            </Wrapper>
          </PageSection>
          <PageSection
            overflow="visible"
            style={{ backgroundColor: "#2b141a", marginTop: "0" }}
          >
            <Wrapper>
              <Container overflow="visible">
                <ImageSection>
                  <CardImage src="/t-shirt mockup.jpg" />
                  <SideText>
                    <BlockText
                      width="large"
                      title="What do we offer?"
                      content="
                        Sample text here. Sample text here. Sample text here.
                        Sample text here. Sample text here. Sample text here.
                        Sample text here. Sample text here. Sample text here.
                    "
                    />
                    <ColumnText>
                      <BlockText
                        width="medium"
                        title="Text"
                        content="
                          Sample text here. Sample text here. Sample text here.
                          Sample text here. Sample text here. Sample text here.
                          Sample text here. Sample text here. Sample text here.
                    "
                      />
                      <BlockText
                        width="medium"
                        title="Text"
                        content="
                          Sample text here. Sample text here. Sample text here.
                          Sample text here. Sample text here. Sample text here.
                          Sample text here. Sample text here. Sample text here.
                    "
                      />
                    </ColumnText>
                  </SideText>
                </ImageSection>
              </Container>
            </Wrapper>
          </PageSection>
        </Page>
      </Grommet>
    </React.Fragment>
  );
};

export default Index;
