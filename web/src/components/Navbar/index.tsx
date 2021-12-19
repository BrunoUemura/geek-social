/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import Link from "next/Link";
import { destroyCookie } from "nookies";

import styles from "./styles.module.scss";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleProfileMenuClick = () => {
    console.log("Profile clicked");
  };

  const handleSignOut = () => {
    destroyCookie(null, "geek.token");
  };

  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <h1 className={styles.title}>Geek Social</h1>
      </Link>
      <div className={styles.controls} onClick={handleProfileMenuClick}>
        {user ? (
          <>
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
            <button className={styles.signOutButton} onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        ) : (
          <div className={styles.authButton}>
            <Link href="/login" passHref>
              <button className={styles.signInButton}>Sign In</button>
            </Link>
            <Link href="/register" passHref>
              <button className={styles.signUpButton}>Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
