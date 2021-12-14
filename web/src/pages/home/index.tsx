import React, { useEffect } from "react";
import { AuthContent, useAuthContext } from "../../context/AuthContext";
import styles from "./styles.module.scss";
import TopBar from "../../components/Topbar";

const HomePage = () => {
  const { user, setUser }: AuthContent = useAuthContext();

  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <h1>{user?.username}</h1>
      </div>
    </>
  );
};

export default HomePage;
