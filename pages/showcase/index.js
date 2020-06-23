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
import Portfolio from "../../components/Portfolio";
import fs from "fs";
import md2json from "md-2-json";
import Footer from "../../components/Footer";

const Showcase = ({ categories, heading }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Showcase - Blankart Designs</title>
      </Head>
      <Grommet full theme={indexTheme}>
        <Page>
          <PageSection background="/BG.png">
            <Wrapper>
              <Container>
                <Navbar />
                <MainHeading animation="fadeIn">{heading}</MainHeading>
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
                title="Project Showcase"
                align="center"
              />
              <Portfolio
                animation={{
                  type: "slideUp",
                  delay: 200,
                }}
                data={categories}
              />
            </Wrapper>
          </PageSection>
          <Footer style={{ backgroundColor: "black", marginTop: "0" }} />
        </Page>
      </Grommet>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const categoryItems = fs
    .readdirSync("./markdown/Portfolio")
    .filter((val) => val !== "Heading.md");
  let categories = [];
  for (const [index, category] of categoryItems.entries()) {
    let fixObj = {};
    const indexFile = fs.readFileSync(
      `./markdown/Portfolio/${category}/Index.md`,
      "utf8"
    );
    const data = md2json.parse(indexFile);
    for (const propertyName in data) {
      fixObj[propertyName] = data[propertyName].raw.trim();
    }
    fixObj["label"] = category;
    categories.push(fixObj);
  }
  const heading = fs.readFileSync("./markdown/Portfolio/Heading.md", "utf8");
  return {
    props: {
      categories,
      heading,
    },
  };
}

export default Showcase;
