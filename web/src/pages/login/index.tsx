import React, { useState } from "react";
import Link from "next/Link";
import router from "next/router";
import { AuthContent, useAuthContext } from "../../context/AuthContext";
import styles from "./styles.module.scss";
import axios from "axios";
import { Authentication } from "../../services/Authentication";

const Login = () => {
  const { user, setUser }: AuthContent = useAuthContext();
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
    router.push("/home");
  };

  const handleSignIn = async () => {
    try {
      validateFields();
      const token: string = await Authentication.login(username, password);

      if (token) {
        authSucceeded(token);
      } else {
        authFailed();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sign In</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
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
      </div>
    </div>
  );
};

export default Login;
