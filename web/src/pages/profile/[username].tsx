import { GetServerSideProps } from "next";

import React from "react";

export default function UserProfile({ username }) {
  return <div>{username}</div>;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { username } = params;
  return {
    props: { username },
  };
};
