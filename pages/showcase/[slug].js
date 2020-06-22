import Head from "next/head";
import Navbar from "../../components/Navbar";
import indexTheme from "../../themes/indexTheme";
import Wrapper from "../../components/Wrapper";
import Container from "../../components/Container";
import PageSection from "../../components/PageSection";
import Page from "../../components/Page";
import MainHeading from "../../components/MainHeading";
import { Grommet } from "grommet";
import BlockText from "../../components/BlockText";
import CardImage from "../../components/CardImage";
import SideText from "../../components/SideText";
import fs from "fs";
import md2json from "md-2-json";

export default ({ slug, description, images }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{slug} - Blankart Designs</title>
      </Head>
      <Grommet full theme={indexTheme}>
        <Page>
          <PageSection background="/BG.png">
            <Wrapper>
              <Container>
                <Navbar />
                <MainHeading animation="fadeIn">SHOWCASE: {slug}</MainHeading>
              </Container>
            </Wrapper>
          </PageSection>
          <PageSection
            style={{ backgroundColor: "#2b141a" }}
            pad={{ top: "large" }}
          >
            <Wrapper>
              <BlockText
                animation={{
                  type: "fadeIn",
                  delay: 100,
                }}
                title={slug}
                content={description}
                align="center"
              />
              <SideText>
                <CardImage
                  src={images}
                  style={{
                    width: "1200px",
                    height: "750px",
                  }}
                  controls={"selectors"}
                />
              </SideText>
            </Wrapper>
          </PageSection>
        </Page>
      </Grommet>
    </React.Fragment>
  );
};

export function getStaticProps({ params }) {
  const { slug } = params;
  const images = fs
    .readdirSync(`./markdown/Portfolio/${slug}`)
    .filter((val) => val != "Index.md")
    .map((val) => require(`../../markdown/Portfolio/${slug}/${val}`));
  let fixObj = {};
  const indexFile = fs.readFileSync(
    `./markdown/Portfolio/${slug}/Index.md`,
    "utf8"
  );
  const data = md2json.parse(indexFile);
  for (const propertyName in data) {
    fixObj[propertyName] = data[propertyName].raw.trim();
  }
  return {
    props: {
      images,
      slug,
      description: fixObj["description"],
    },
  };
}

export async function getStaticPaths() {
  const portfolioDir = fs.readdirSync("./markdown/Portfolio");
  const paths = portfolioDir.map((val) => ({
    params: {
      slug: val,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
