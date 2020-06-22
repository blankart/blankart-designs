import { Grommet } from "grommet";
import fs from "fs";
import md2json from "md-2-json";
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
import Testimonials from "../components/Testimonials";
import Subheading from "../components/Subheading";

const Index = ({
  subheading,
  indexImages,
  descriptions,
  services,
  testimonials,
  testimonialsText,
  heading,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>Blankart Designs</title>
        <link href="/animationheading.css" rel="stylesheet" />
      </Head>
      <Grommet full theme={indexTheme}>
        <Page>
          <PageSection background="/BG.png">
            <Wrapper>
              <Container>
                <Navbar />
                <MainHeading animation="fadeIn">{heading}</MainHeading>
                <Subheading animation={{ type: "fadeIn", delay: "150" }}>
                  {subheading}
                </Subheading>
                <Services animation="slideUp" data={services} />
              </Container>
            </Wrapper>
          </PageSection>
          <PageSection
            overflow="visible"
            style={{ backgroundColor: "#2b141a", marginTop: "0" }}
          >
            <Wrapper>
              <Container
                animation={{ type: "slideUp", delay: "100" }}
                overflow="visible"
              >
                <ImageSection>
                  <CardImage src={indexImages} />
                  <SideText>
                    <BlockText
                      title={descriptions.heading1}
                      content={descriptions.content1}
                    />
                    <ColumnText>
                      <BlockText
                        width="medium"
                        title={descriptions.heading2}
                        content={descriptions.content2}
                      />
                      <BlockText
                        title={descriptions.heading3}
                        content={descriptions.content3}
                        width="medium"
                      />
                    </ColumnText>
                  </SideText>
                </ImageSection>
              </Container>
            </Wrapper>
          </PageSection>
          <PageSection>
            <Wrapper>
              <Container animation={{ type: "slideUp", delay: "200" }}>
                <ImageSection>
                  <SideText>
                    <BlockText
                      title="Testimonials"
                      content={testimonialsText}
                    />
                  </SideText>
                  <Testimonials data={testimonials} />
                </ImageSection>
              </Container>
            </Wrapper>
          </PageSection>
        </Page>
      </Grommet>
    </React.Fragment>
  );
};

export function getStaticProps() {
  const heading = fs.readFileSync("./markdown/Heading.md", "utf8");
  const subheading = fs.readFileSync("./markdown/Subheading.md", "utf8");
  const servicesFile = fs.readdirSync("./markdown/Services");
  const descriptionsFile = fs.readFileSync(
    "./markdown/Descriptions.md",
    "utf8"
  );
  const indexImages = fs
    .readdirSync("./public/index images")
    .map((dat) => `/index images/${dat}`);
  const testimonialsFile = fs.readdirSync("./markdown/Testimonials");
  const testimonialsText = fs.readFileSync(
    "./markdown/Testimonials.md",
    "utf8"
  );
  let descriptions = {};
  let testimonials = [];
  let services = [];
  for (const [index, service] of servicesFile.entries()) {
    let fixObj = {};
    const data = md2json.parse(
      fs.readFileSync(`./markdown/Services/${service}`, "utf8")
    );
    for (const propertyName in data) {
      fixObj[propertyName] = data[propertyName].raw;
    }
    fixObj["title"] = service.split(".")[0];
    services.push(fixObj);
  }

  for (const [index, testimonial] of testimonialsFile.entries()) {
    let fixObj = {};
    const data = md2json.parse(
      fs.readFileSync(`./markdown/Testimonials/${testimonial}`, "utf8")
    );
    for (const propertyName in data) {
      fixObj[propertyName] = data[propertyName].raw;
    }
    testimonials.push(fixObj);
  }

  const descData = md2json.parse(descriptionsFile);
  for (const propertyName in descData) {
    descriptions[propertyName] = descData[propertyName].raw;
  }

  return {
    props: {
      heading,
      subheading,
      services,
      testimonialsText,
      testimonials,
      descriptions,
      indexImages,
    },
  };
}

export default Index;
