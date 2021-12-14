/* eslint-disable @next/next/no-img-element */
import { ReactChild, useEffect, useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/Link";
import styles from "./styles.module.scss";
import { AuthContent, useAuthContext } from "../../context/AuthContext";
import { checkUserSession } from "../../utils/CheckAuthentication";
import axios from "axios";
import { IUserType } from "../../utils/UserType";
import { Users } from "../../services/Users";

const handleHamburgerMenuClick = () => {
  console.log("Hamburger clicked");
};

const handleProfileMenuClick = () => {
  console.log("Profile clicked");
};

const TopBar = () => {
  // const { user }: AuthContent = useAuthContext();
  const [user, setUser] = useState({
    _id: "",
    username: "",
    email: "",
    profilePicture: "",
    coverPicture: "",
    description: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    (async () => {
      const id = checkUserSession();
      const response: IUserType = await Users.findAllById(id);
      setUser(response);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className="text-white text-center cursor-pointer text-3xl ml-6">
        Geek Social
      </h1>

      <div
        className="w-14 h-14 cursor-pointer absolute right-0 mr-8"
        onClick={handleProfileMenuClick}
      >
        {user ? (
          <img
            className="rounded-full"
            src={
              user.profilePicture ||
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
