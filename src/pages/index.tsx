import type { NextPage } from "next";
import Head from "next/head";

import { BasicsView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Cynova Auction</title>
        <meta
          name="description"
          content="cynova nft auction for the cynovians"
        />
      </Head>

      <BasicsView />

    </div>
  );
};

export default Home;
