/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import Link from "next/Link";
import styles from "./styles.module.scss";
import { AuthContext } from "../../context/AuthContext";

const TopBar = () => {
  const { user } = useContext(AuthContext);

  const handleProfileMenuClick = () => {
    console.log("Profile clicked");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Geek Social</h1>

      <div className={styles.controls} onClick={handleProfileMenuClick}>
        {user ? (
          <img
            className={styles.image}
            src={
              user?.profilePicture ||
              "https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg"
            }
            alt="profile-photo"
          />
        ) : (
          <>
            <Link href="/login" passHref>
              <button>Login</button>
            </Link>
            <Link href="/register" passHref>
              <button>Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TopBar;
