import React from "react";

interface Props {
    name?: string;
  }

const Avatar = ({ name }: Props) => {
  const Avatar = name?.slice(0, 1);

  return (
    <>
      <h1>{Avatar}</h1>
    </>
  );
};

export default Avatar;