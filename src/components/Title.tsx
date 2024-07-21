import React from "react";

interface Props {
  title: string;
}

const styling = {
  fontSize: "2.5rem",
  margin: "2rem 5rem",
};
const Title = ({ title }: Props) => {
  return <div style={styling}>{title}</div>;
};

export default Title;
