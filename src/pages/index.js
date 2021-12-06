import Head from "next/head";
import Projects from "../components/Projects/index";
import { Layout } from "../layout/Layout";
export default function Home() {
  return (
    <div>
      <Head>
        <title>My portfolio | ESDMX</title>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <meta content="Easy Software Design México by PROTSEA" name="author" />
        <meta
          content="Ing. Raúl Adolfo Torres Vargas Personal native Portfolio develop by Easy Software Design México by PROTSEA where show you his personal projects"
          name="description"
        />
        <meta
          content="Easy Software Design México by PROTSEA"
          name="publisher"
        />
        <link rel="icon" href="/images/logo/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo/logo.png" />
      </Head>
      <Layout>
        {/* <Section grid></Section> */}
        <Projects />
      </Layout>
    </div>
  );
}
