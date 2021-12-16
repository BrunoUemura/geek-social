import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import TopBar from "../../components/Topbar";
import { GetServerSideProps } from "next";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="w-full h-full flex justify-center items-center">
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
