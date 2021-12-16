import router from "next/router";
import React, { useState } from "react";
import { Authentication } from "../../services/Authentication";
import styles from "./styles.module.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateFields = () => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      throw new Error("All fields are required");
    }

    if (password !== confirmPassword) {
      throw new Error("Entered password do not match");
    }
  };

  const handleSignUp = async () => {
    try {
      validateFields();
      const authentication = new Authentication();
      const { status }: any = await authentication.register(
        username,
        email,
        password
      );
      if (status == 200) {
        console.log("registered");
        router.push("/login");
      }
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sign Up</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <button className={styles.button} type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
        <span className={styles.span}>
          Already registered?{" "}
          <a href="/login" className={styles.anchorTag}>
            Sign In
          </a>
        </span>
      </div>
    </div>
  );
};

export default Register;
