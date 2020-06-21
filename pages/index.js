import { Grommet, Box, Text, Paragraph } from "grommet";
import indexTheme from "../themes/indexTheme";
import Navbar from "../components/Navbar";
import PageSection from "../components/PageSection";
import MainHeading from "../components/MainHeading";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import CardImage from "../components/CardImage";
import Page from "../components/Page";
import ServiceItem from "../components/ServiceItem";
import Head from "next/head";
import Services from "../components/Services";

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
                <Box
                  align="center"
                  justify="center"
                  direction="row"
                  // direction="column"
                  wrap={false}
                  gap="large"
                  style={{ marginTop: "-25px" }}
                >
                  <CardImage src="/t-shirt mockup.jpg" />
                  <Box
                    align="center"
                    justify="center"
                    gap="large"
                    pad={{ top: "xlarge" }}
                  >
                    <Box align="stretch" justify="center" width="large">
                      <Text
                        color="background-front"
                        style={{
                          fontFamily: "Montserrat Black",
                          fontSize: "60px",
                        }}
                        size="xxlarge"
                        textAlign="start"
                      >
                        What do we offer?
                      </Text>
                      <Paragraph size="large" color="dark-4" textAlign="start">
                        Sample text here. Sample text here. Sample text here.
                        Sample text here. Sample text here. Sample text here.
                        Sample text here. Sample text here. Sample text here.
                      </Paragraph>
                    </Box>
                    <Box align="start" justify="start" direction="row">
                      <Box align="stretch" justify="start" width="medium">
                        <Text
                          color="background-front"
                          style={{
                            fontFamily: "Montserrat Black",
                            fontSize: "60px",
                          }}
                          size="xxlarge"
                          textAlign="start"
                        >
                          Text
                        </Text>
                        <Paragraph
                          size="large"
                          color="dark-4"
                          textAlign="start"
                        >
                          Sample text here. Sample text here. Sample text here.
                          Sample text here. Sample text here. Sample text here.
                          Sample text here. Sample text here. Sample text here.
                        </Paragraph>
                      </Box>
                      <Box align="stretch" justify="start" width="medium">
                        <Text
                          color="background-front"
                          style={{
                            fontFamily: "Montserrat Black",
                            fontSize: "60px",
                          }}
                          size="xxlarge"
                          textAlign="start"
                        >
                          Text
                        </Text>
                        <Paragraph
                          size="large"
                          color="dark-4"
                          textAlign="start"
                        >
                          Sample text here. Sample text here. Sample text here.
                          Sample text here. Sample text here. Sample text here.
                          Sample text here. Sample text here. Sample text here.
                        </Paragraph>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Wrapper>
          </PageSection>
        </Page>
      </Grommet>
    </React.Fragment>
  );
};

export default Index;
