/**
 * [ ] Load data using server components
 * [ ] Nest a server component inside a server component
 * [ ] Use a external package that uses states inside a server components
 * [ ] Build a pagination page, that takes `page` slug
 */

export const revalidate = false;

import React from "react";
import Head from "next/head";
import getList from "../resources/list";
import Author from "../author";
import { DateTimePrimitive } from "../components";
import Link from "next/link";

const Home = async (props) => {
  const response = await getList();

  return (
    <>
      <div className="home-container">
        <Head>
          <title>Antique Nocturnal Hornet</title>
          <meta property="og:title" content="Antique Nocturnal Hornet" />
        </Head>
        <div>
          {response.data.map((item) => {
            return (
              <div key={item.id} style={{ margin: "16px" }}>
                <Link href={`/posts/${item.id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.shortDescription}</p>
                <Author id={item.author.id} />
                <DateTimePrimitive date={item.updatedAt} format="DD-MM-YYYY" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
