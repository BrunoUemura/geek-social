import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./styles.module.scss";
import TopBar from "../../components/Topbar";
import { GetServerSideProps } from "next";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <h1>{user?.username}</h1>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.req.cookies);

  return {
    props: {},
  };
};

export default HomePage;
