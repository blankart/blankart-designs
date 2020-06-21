import { Grommet, Box, Image, Text, Paragraph } from "grommet";
import indexTheme from "../themes/indexTheme";
import Navbar from "../components/Navbar";
import PageSection from "../components/PageSection";
import MainHeading from "../components/MainHeading";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import CardImage from "../components/CardImage";
import Page from "../components/Page";
import ServiceItem from "../components/ServiceItem";

const servicesList = [
  {
    title: "Graphic Designer",
    image: "/T-Shirt Icon.png",
    content:
      "Sample text here. Sample text here. Sample text here. Sampletext here. Sample text here. Sample text here.",
  },
  {
    title: "Web Development",
    image: "/Web Development.png",
    content:
      "Sample text here. Sample text here. Sample text here. Sampletext here. Sample text here. Sample text here.",
  },
  {
    title: "Node Developer",
    image: "/NodeReactJS Development.png",
    content:
      "Sample text here. Sample text here. Sample text here. Sampletext here. Sample text here. Sample text here.",
  },
];

const Index = () => {
  return (
    <Grommet full theme={indexTheme}>
      <Page>
        <PageSection>
          <Wrapper>
            <Container>
              <Navbar />
              <MainHeading>DIGITAL ENTHUSIAST.</MainHeading>
              <Box
                align="start"
                justify="center"
                width="xxlarge"
                direction="row"
                gap="xlarge"
              >
                {servicesList &&
                  servicesList.map((service) => (
                    <ServiceItem
                      key={service.title}
                      src={service.image}
                      title={service.title}
                      content={service.content}
                    />
                  ))}
              </Box>
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
                align="start"
                justify="center"
                direction="row"
                wrap={false}
                gap="large"
                style={{ marginTop: "-25px" }}
              >
                <CardImage src="/t-shirt mockup.jpg" />
                <Box
                  align="start"
                  justify="center"
                  gap="large"
                  pad={{ top: "xlarge" }}
                >
                  <Box align="stretch" justify="center" width="large">
                    <Text
                      color="background-front"
                      style={{
                        fontFamily: "Montserrat Black",
                        fontSize: "70px",
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
                          fontSize: "70px",
                        }}
                        size="xxlarge"
                        textAlign="start"
                      >
                        Text
                      </Text>
                      <Paragraph size="large" color="dark-4" textAlign="start">
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
                          fontSize: "70px",
                        }}
                        size="xxlarge"
                        textAlign="start"
                      >
                        Text
                      </Text>
                      <Paragraph size="large" color="dark-4" textAlign="start">
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
  );
};

export default Index;
