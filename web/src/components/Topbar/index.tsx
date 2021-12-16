/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import Link from "next/Link";
import styles from "./styles.module.scss";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button";

const TopBar = () => {
  const { user } = useContext(AuthContext);

  const handleProfileMenuClick = () => {
    console.log("Profile clicked");
  };

  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <h1 className={styles.title}>Geek Social</h1>
      </Link>
      <div className={styles.controls} onClick={handleProfileMenuClick}>
        {user ? (
          <Link href="/profile" passHref>
            <img
              className={styles.image}
              src={
                user?.profilePicture ||
                "https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg"
              }
              alt="profile-photo"
            />
          </Link>
        ) : (
          <div className={styles.authButton}>
            <Link href="/login" passHref>
              <button className={styles.loginButton}>Login</button>
            </Link>
            <Link href="/register" passHref>
              <button className={styles.RegisterButton}>Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
