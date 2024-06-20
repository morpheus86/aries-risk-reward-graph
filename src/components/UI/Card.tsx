import React, { FC } from "react";
import { ChildrenProps } from "../../interfaces";
import classes from "./Card.module.css";
const Card: FC<ChildrenProps> = ({ children }) => {
  const { card } = classes;
  return <article className={card}>{children}</article>;
};
export default Card;
