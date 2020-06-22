import { Grommet } from "grommet";
import { useEffect, useState } from "react";
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
        <link href="/animationheading.css" rel="stylesheet" />
      </Head>
      <Grommet full theme={indexTheme}>
        <Page>
          <PageSection background="/BG.png">
            <Wrapper>
              <Container>
                <Navbar />
                <MainHeading animation="fadeIn">
                  WE ARE BLANKART DESIGNS.
                </MainHeading>
                <Services animation="slideUp" data={servicesList} />
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
                  <CardImage src="/t-shirt mockup.jpg" />
                  <SideText>
                    <BlockText
                      title="What do we offer?"
                      content="
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    "
                    />
                    <ColumnText>
                      <BlockText
                        width="medium"
                        title="Text"
                        content="
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    "
                      />
                      <BlockText
                        width="medium"
                        title="Text"
                        content="
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
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
