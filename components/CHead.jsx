import Head from "next/head";
const CHead = ({ title }) => {
  return (
    <>
      <Head>
        <title>{`${title} | TechLion Dev`}</title>
      </Head>
    </>
  );
};

export default CHead;