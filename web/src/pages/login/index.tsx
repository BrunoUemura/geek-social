import React, { useContext, useEffect, useState } from "react";
import router from "next/router";
import { useForm } from "react-hook-form";

import styles from "./styles.module.scss";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const clearVariables = (): void => {
    setUsername("");
    setPassword("");
  };

  const validateFields = () => {
    if (username === "" || password === "") {
      throw new Error("All fields are required");
    }
  };

  const authFailed = (): void => {
    clearVariables();
    alert("Authentication Failed! Check credentials");
  };

  const authSucceeded = (token: string): void => {
    localStorage.setItem("@auth:token", token);
    router.push("/");
  };

  const handleSignIn = async (data: any) => {
    await signIn(data);

    // try {
    //   validateFields();
    //   const token: string = await Authentication.login(username, password);
    //   if (token) {
    //     authSucceeded(token);
    //   } else {
    //     authFailed();
    //   }
    // } catch (error) {
    //   alert(error);
    // }
  };

  useEffect(() => {
    router.push("/login");
  }, []);

  return (
    <div className={styles.container}>
      <form className={styles.content} onSubmit={handleSubmit(handleSignIn)}>
        <h1 className={styles.title}>Sign In</h1>
        <input
          {...register("username")}
          className={styles.input}
          type="text"
          placeholder="Username"
          // value={username}
          // onChange={(event) => {
          //   setUsername(event.target.value);
          // }}
        />
        <input
          {...register("password")}
          className={styles.input}
          type="password"
          placeholder="Password"
          // value={password}
          // onChange={(event) => {
          //   setPassword(event.target.value);
          // }}
        />
        <button className={styles.button} type="submit" onClick={handleSignIn}>
          Sign In
        </button>
        <span className={styles.span}>
          Not registered yet?{" "}
          <a href="/register" className={styles.anchorTag}>
            Create an account
          </a>
        </span>
      </form>
    </div>
  );
};

export default Login;
