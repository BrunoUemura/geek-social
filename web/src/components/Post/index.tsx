/* eslint-disable @next/next/no-img-element */
import { profile } from "console";
import router from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Users } from "../../services/Users";
import styles from "./styles.module.scss";

type Props = {
  post: IPosts;
};

type IPosts = {
  _id: string;
  userId: string;
  title: string;
  description: string;
  image: string;
  likes: string[];
  createdAt: string;
  updatedAt: string;
};

type IUser = {
  _id: string;
  username: string;
  email: string;
  profilePicture: string;
  coverPicture: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export default function Post({ post }: Props) {
  const { user } = useContext(AuthContext);
  const [postedBy, setPostedBy] = useState<IUser>();

  useEffect(() => {
    (async () => {
      const result = await Users.findAllById(post.userId);
      setPostedBy(result);
    })();
  }, []);

  const handleProfileRedirect = (id: string) => {
    if (id === user._id) {
      router.push(`profile`);
    } else {
      router.push(`profile/${id}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.postHeader}>
        <img
          src={postedBy?.profilePicture}
          alt={postedBy?.username}
          onClick={() => {
            handleProfileRedirect(post?.userId);
          }}
        />
        <div>
          <h2
            className={styles.username}
            onClick={() => {
              handleProfileRedirect(post.userId);
            }}
          >
            @{postedBy?.username}
          </h2>
          <p className={styles.date}>{post.createdAt}</p>
        </div>
      </div>

      <div className={styles.postContent}>
        <h3 className={styles.title}>{post?.title}</h3>
        <p className={styles.description}>{post?.description}</p>

        <div className={styles.image}>
          <img src={post?.image} alt={post?.image} />
        </div>

        <span className={styles.likes}>❤ {post?.likes.length}</span>
      </div>
    </div>
  );
}
