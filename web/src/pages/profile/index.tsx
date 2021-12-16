/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import Link from "next/link";

import Button from "../../components/Button";
import TopBar from "../../components/Topbar";
import { AuthContext } from "../../context/AuthContext";
import styles from "./styles.module.scss";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [renderPosts, setRenderPosts] = useState(false);

  return (
    <div className={styles.container}>
      <TopBar />
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
                <Button
                  text="+ New"
                  fontSize="larger"
                  textColor="var(--text-light)"
                  background="var(--button-blue)"
                  width="100px"
                  heigth="30px"
                />
              </Link>
              <h1>Posts components</h1>
            </div>
          ) : (
            <div>
              <Link href="/playlists/new" passHref>
                <Button
                  text="+ New"
                  fontSize="larger"
                  textColor="var(--text-light)"
                  background="var(--button-blue)"
                  width="100px"
                  heigth="30px"
                />
              </Link>
              <h1>Playlists components</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
