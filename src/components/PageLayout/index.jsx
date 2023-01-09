import React from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function PageLayout({ children, titlePage }) {
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content="Test frontend habilities" />
      </Head>
      <div className="w-full h-screen max-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        <main className="w-full bg-gray-900 text-gray-50 flex-grow">
          <div className="m-auto p-2 w-1/2 h-full bg-gray-800">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
