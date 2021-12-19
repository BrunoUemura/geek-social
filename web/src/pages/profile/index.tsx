/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import router from "next/router";
import Link from "next/link";

import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../context/AuthContext";
import styles from "./styles.module.scss";

export default function Profile() {
  const { user, isAuthenticated } = useContext(AuthContext);
  const [renderPosts, setRenderPosts] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      alert("You need to Sign In to access your profile");
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <img
            className={styles.profileImage}
            src={
              user?.profilePicture ||
              "https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg"
            }
            alt={user?.username}
          />
          <h1>@{user?.username}</h1>
          <h4>{user?.description}</h4>
        </div>

        <div className={styles.options}>
          <button
            className={styles.optionsButton}
            onClick={() => {
              setRenderPosts(true);
            }}
          >
            Posts
          </button>
          <button
            className={styles.optionsButton}
            onClick={() => {
              setRenderPosts(false);
            }}
          >
            Playlists
          </button>
        </div>

        <div className={styles.contentSection}>
          {renderPosts ? (
            <div>
              <Link href="/posts/new" passHref>
                <button className={styles.newButton}>+ New</button>
              </Link>
              <h1>Posts components</h1>
            </div>
          ) : (
            <div>
              <Link href="/playlists/new" passHref>
                <button className={styles.newButton}>+ New</button>
              </Link>
              <h1>Playlists components</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
