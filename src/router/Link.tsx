import React from "react";
import useRouter from "./useRouter";

interface LinkProps {
  to: string;
  children?: React.ReactChild;
}

const Link: React.FC<LinkProps> = ({ to, children }) => {
  const { push } = useRouter();

  const onClick = () => {
    push(to);
  };

  return <button onClick={onClick}>{children}</button>;
};

export default Link;
