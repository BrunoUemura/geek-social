import React, { useContext, useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import { AuthContext } from "../../context/AuthContext";
import styles from "./styles.module.scss";
import Navbar from "../../components/Navbar";
import { Posts } from "../../services/Posts";
import Post from "../../components/Post";

type IPosts = {
  _id: string;
  userId: string;
  description: string;
  image: string;
  likes: string[];
  createdAt: string;
  updatedAt: string;
};

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState<IPosts[]>();

  useEffect(() => {
    (async () => {
      const result = await Posts.findAll();
      setPosts(result);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        {posts?.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.req.cookies);

  return {
    props: {},
  };
};

export default HomePage;
