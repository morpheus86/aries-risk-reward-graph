import React, { FC } from "react";
import classes from "./Container.module.css";
import { ChildrenProps } from "../../interfaces";
const Container: FC<ChildrenProps> = ({ children }) => {
  const { container } = classes;
  return <div className={container}>{children}</div>;
};

export default Container;
