import React, { FC, ReactNode } from "react";
import Head from "next/head";

interface IHeadConfigProps {
  title: string;
  children?: ReactNode;
};

const HeadConfig: FC<IHeadConfigProps> = (props) => {
  const { title, children } = props;
  return (
    <Head>
      <title>{title}</title>
      {children}
    </Head>
  );
};

export default HeadConfig;
