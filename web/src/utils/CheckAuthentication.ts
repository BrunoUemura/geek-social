import router from "next/router";
import jwt from "jsonwebtoken";

/**
 * JWT token is needed in order to make a POST, PUT or DELETE request.
 * Also this token expires in 1 hour. So you will need to Sign in again to generate a new one.
 * The token is associated with the user that Signed in.
 * So if we decode this token we will be able to retrieve user ID and Email.
 */

export function checkUserSession(page?: string) {
  if (localStorage.getItem("@auth:token") === null) {
    // alert("Your need to sign in to proceed!");
    // router.push("/login");
    return;
  }

  const token = localStorage.getItem("@auth:token") || "";
  const tokenDecoded: any = jwt.decode(token);
  const { id, exp } = tokenDecoded;

  // Check the session expiration with jwt.exp.
  const currentTimestamp = new Date().getTime() / 1000;
  if (exp < currentTimestamp) {
    alert("Your session expired, Sign in again to continue!");
    localStorage.removeItem("@auth:token");
    router.push("/login");
    return;
  }

  if (page) {
    router.push(`/${page}`);
    return id;
  }
  return id;
}
