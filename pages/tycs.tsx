import { GetStaticProps, NextPage } from "next";
import React from "react";
import { TyC, TyCsAPIResponse } from "../types";
import styles from "../styles/TYC.module.css";
import Head from "next/head";
import { ITerminosYCondiciones } from "../types/interfaces";

const TerminosYCondiciones: NextPage<ITerminosYCondiciones> = ({ data }) => {
  if (!data) return null;

  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>Tienda Libre - Términos y Condiciones</title>
        <meta
          name="description"
          content="términos y condiciones de Tienda Libre"
        />
      </Head>
      <h2>Terminos y Concidiones</h2>
      <p>Versión: {version}</p>
      {tycs.map(renderTyc)}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/tycs`);
  const data: TyCsAPIResponse = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default TerminosYCondiciones;
